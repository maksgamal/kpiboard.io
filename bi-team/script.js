(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var revealNodes = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) {
      node.classList.add("revealed");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px" }
    );

    revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  var roiForm = document.querySelector("[data-roi-form]");
  if (roiForm) {
    var fields = {
      people: roiForm.querySelector("#people"),
      hours: roiForm.querySelector("#hours"),
      cost: roiForm.querySelector("#cost"),
    };
    var total = roiForm.querySelector("[data-roi-total]");

    function updateRoi() {
      Object.keys(fields).forEach(function (key) {
        var output = roiForm.querySelector('output[for="' + key + '"]');
        if (output) output.textContent = fields[key].value;
      });

      var monthly =
        Number(fields.people.value) *
        Number(fields.hours.value) *
        Number(fields.cost.value) *
        4.33;
      total.textContent = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(monthly);
    }

    Object.keys(fields).forEach(function (key) {
      fields[key].addEventListener("input", updateRoi);
    });
    updateRoi();
  }

  var leadForm = document.querySelector("[data-lead-form]");
  if (leadForm) {
    var statusNode = leadForm.querySelector("[data-form-status]");
    var submitButton = leadForm.querySelector('button[type="submit"]');
    var submitLabel = submitButton.querySelector("span");
    var defaultLabel = submitLabel.textContent;

    function showStatus(message, type) {
      statusNode.textContent = message;
      statusNode.className = "form-status visible " + type;
    }

    function setSubmitting(isSubmitting) {
      submitButton.disabled = isSubmitting;
      submitLabel.textContent = isSubmitting ? "Submitting…" : defaultLabel;
    }

    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      statusNode.className = "form-status";
      statusNode.textContent = "";

      Array.prototype.forEach.call(leadForm.elements, function (field) {
        if (field.removeAttribute) field.removeAttribute("aria-invalid");
      });

      if (!leadForm.checkValidity()) {
        Array.prototype.forEach.call(leadForm.elements, function (field) {
          if (field.validity && !field.validity.valid) field.setAttribute("aria-invalid", "true");
        });
        showStatus("Check the highlighted fields and confirm your email consent.", "error");
        leadForm.reportValidity();
        return;
      }

      var formData = new FormData(leadForm);
      var payload = {
        firstName: String(formData.get("firstName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        challenge: String(formData.get("challenge") || "").trim(),
        website: String(formData.get("website") || "").trim(),
        consent: formData.get("consent") === "yes",
        source: "bi-team-landing",
      };

      setSubmitting(true);

      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().catch(function () {
            return {};
          }).then(function (data) {
            if (!response.ok) {
              throw new Error(data.message || "The request could not be submitted.");
            }
            return data;
          });
        })
        .then(function () {
          leadForm.reset();
          showStatus(
            "Check your inbox and confirm your email. We will follow up after confirmation.",
            "success"
          );
        })
        .catch(function (error) {
          showStatus(
            error && error.message
              ? error.message
              : "The request could not be submitted. Email hello@kpiboard.io instead.",
            "error"
          );
        })
        .finally(function () {
          setSubmitting(false);
        });
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
