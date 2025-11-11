// Update pricing table values dynamically
(function() {
  function updatePricingTable() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (!pricingSection) {
      return;
    }
    
    // Find all text nodes and update values
    const walker = document.createTreeWalker(
      pricingSection,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    let node;
    const updates = [];
    
    while (node = walker.nextNode()) {
      const text = node.textContent.trim();
      
      // Update Data Sources for Advanced: "Up to 15" → "Up to 20"
      if (text.includes('Up to 15') && node.parentElement) {
        const parent = node.parentElement;
        const parentText = parent.textContent || '';
        
        // Check if this is in Data Sources row for Advanced plan
        if (parentText.includes('Data Sources') || parentText.includes('Sources')) {
          // Check if this is Advanced column (usually 3rd column)
          const row = parent.closest('tr, [class*="row"], [class*="table-row"]');
          if (row) {
            const cells = Array.from(row.querySelectorAll('td, [class*="cell"], [class*="column"]'));
            const cellIndex = cells.indexOf(parent.closest('td, [class*="cell"], [class*="column"]'));
            
            // Advanced is usually 3rd column (index 2)
            if (cellIndex === 2 || parentText.toLowerCase().includes('advanced')) {
              node.textContent = node.textContent.replace(/Up to 15/g, 'Up to 20');
              updates.push('Data Sources Advanced: Up to 15 → Up to 20');
            }
          }
        }
      }
      
      // Update Users for Advanced: "Up to 25" → "Up to 20"
      if (text.includes('Up to 25') && node.parentElement) {
        const parent = node.parentElement;
        const parentText = parent.textContent || '';
        
        // Check if this is in Users row
        if (parentText.includes('Users') || parentText.includes('Number of Users')) {
          // Check if this is Advanced column
          const row = parent.closest('tr, [class*="row"], [class*="table-row"]');
          if (row) {
            const cells = Array.from(row.querySelectorAll('td, [class*="cell"], [class*="column"]'));
            const cellIndex = cells.indexOf(parent.closest('td, [class*="cell"], [class*="column"]'));
            
            // Advanced is usually 3rd column (index 2)
            if (cellIndex === 2 || parentText.toLowerCase().includes('advanced')) {
              node.textContent = node.textContent.replace(/Up to 25/g, 'Up to 20');
              updates.push('Users Advanced: Up to 25 → Up to 20');
            }
          }
        }
      }
    }
    
    // More direct approach: find all elements with "Up to 15" or "Up to 25" and check context
    const allElements = pricingSection.querySelectorAll('*');
    
    allElements.forEach(element => {
      const text = element.textContent || '';
      const innerHTML = element.innerHTML || '';
      
      // Update Data Sources for Professional: ensure it's "Up to 10"
      if (text.includes('Data Sources') || text.includes('Sources')) {
        const parentRow = element.closest('tr, [class*="row"]');
        if (parentRow) {
          const rowText = parentRow.textContent || '';
          if (rowText.includes('Data Sources') || rowText.includes('Sources')) {
            const cells = Array.from(parentRow.querySelectorAll('td, [class*="cell"], [class*="column"]'));
            
            // Professional is usually 2nd column (index 1, after Starter)
            const professionalCell = cells[1];
            if (professionalCell && (professionalCell.contains(element) || professionalCell === element)) {
              const cellText = professionalCell.textContent || '';
              // Update if it's not already "Up to 10"
              if (cellText.includes('Up to') && !cellText.includes('Up to 10')) {
                professionalCell.innerHTML = professionalCell.innerHTML.replace(/Up to \d+/g, 'Up to 10');
                professionalCell.textContent = professionalCell.textContent.replace(/Up to \d+/g, 'Up to 10');
                updates.push('Data Sources Professional: updated to Up to 10');
              }
            }
          }
        }
      }
      
      // Update "Up to 15" to "Up to 20" for Advanced plan in Data Sources
      if (text.includes('Up to 15')) {
        // Check if this is in Advanced column
        const parentRow = element.closest('tr, [class*="row"]');
        if (parentRow) {
          const rowText = parentRow.textContent || '';
          // Check if this is Data Sources row and Advanced column (3rd position)
          if (rowText.includes('Data Sources') || rowText.includes('Sources')) {
            const cells = Array.from(parentRow.querySelectorAll('td, [class*="cell"], [class*="column"]'));
            const cellIndex = cells.findIndex(cell => cell.contains(element) || cell === element);
            
            // Advanced is usually 3rd column (index 2, after Starter and Professional)
            if (cellIndex === 2 || rowText.toLowerCase().includes('advanced')) {
              element.innerHTML = innerHTML.replace(/Up to 15/g, 'Up to 20');
              element.textContent = text.replace(/Up to 15/g, 'Up to 20');
              updates.push('Data Sources Advanced: Up to 15 → Up to 20');
            }
          }
        }
      }
      
      // Update "Up to 25" to "Up to 20" for Advanced plan in Users
      if (text.includes('Up to 25')) {
        const parentRow = element.closest('tr, [class*="row"]');
        if (parentRow) {
          const rowText = parentRow.textContent || '';
          // Check if this is Users row and Advanced column
          if (rowText.includes('Users') || rowText.includes('Number of Users')) {
            const cells = Array.from(parentRow.querySelectorAll('td, [class*="cell"], [class*="column"]'));
            const cellIndex = cells.findIndex(cell => cell.contains(element) || cell === element);
            
            // Advanced is usually 3rd column
            if (cellIndex === 2 || rowText.toLowerCase().includes('advanced')) {
              element.innerHTML = innerHTML.replace(/Up to 25/g, 'Up to 20');
              element.textContent = text.replace(/Up to 25/g, 'Up to 20');
              updates.push('Users Advanced: Up to 25 → Up to 20');
            }
          }
        }
      }
    });
    
    // More aggressive replacement - find columns and update
    const tables = pricingSection.querySelectorAll('table, [class*="table"], [class*="pricing"]');
    tables.forEach(table => {
      const rows = Array.from(table.querySelectorAll('tr, [class*="row"]'));
      
      rows.forEach((row, rowIndex) => {
        const cells = Array.from(row.querySelectorAll('td, th, [class*="cell"], [class*="column"]'));
        const rowText = row.textContent || '';
        
        // Find Data Sources row
        if (rowText.includes('Data Sources') || rowText.includes('Sources')) {
          // Find Professional column by header
          const headerRow = rows[0];
          if (headerRow) {
            const headerCells = Array.from(headerRow.querySelectorAll('th, td, [class*="cell"], [class*="column"]'));
            const professionalHeaderIndex = headerCells.findIndex(cell => {
              const headerText = cell.textContent || '';
              return headerText.toLowerCase().includes('professional') || headerText.toLowerCase().includes('growing');
            });
            
            if (professionalHeaderIndex >= 0 && cells.length > professionalHeaderIndex) {
              const professionalCell = cells[professionalHeaderIndex];
              if (professionalCell) {
                const cellText = professionalCell.textContent || '';
                // Update Professional to "Up to 10" if it's different
                if (cellText.includes('Up to 20')) {
                  professionalCell.textContent = cellText.replace('Up to 20', 'Up to 10');
                  professionalCell.innerHTML = professionalCell.innerHTML.replace('Up to 20', 'Up to 10');
                  updates.push('Data Sources Professional: Up to 20 → Up to 10');
                } else if (cellText.includes('Up to') && !cellText.includes('Up to 10')) {
                  professionalCell.textContent = cellText.replace(/Up to \d+/g, 'Up to 10');
                  professionalCell.innerHTML = professionalCell.innerHTML.replace(/Up to \d+/g, 'Up to 10');
                  updates.push('Data Sources Professional: updated to Up to 10');
                }
              }
            }
          }
          
          // Fallback: Professional is usually 2nd data cell (index 1, after header)
          if (cells.length > 1) {
            const professionalCell = cells[1];
            if (professionalCell) {
              const cellText = professionalCell.textContent || '';
              // Update Professional to "Up to 10" if it's different
              if (cellText.includes('Up to 20')) {
                professionalCell.textContent = cellText.replace('Up to 20', 'Up to 10');
                professionalCell.innerHTML = professionalCell.innerHTML.replace('Up to 20', 'Up to 10');
                updates.push('Data Sources Professional: Up to 20 → Up to 10 (fallback)');
              } else if (cellText.includes('Up to') && !cellText.includes('Up to 10')) {
                professionalCell.textContent = cellText.replace(/Up to \d+/g, 'Up to 10');
                professionalCell.innerHTML = professionalCell.innerHTML.replace(/Up to \d+/g, 'Up to 10');
                updates.push('Data Sources Professional: updated to Up to 10 (fallback)');
              }
            }
          }
          
          // Advanced is usually 3rd data cell (index 2, after header)
          if (cells.length > 2) {
            const advancedCell = cells[2];
            if (advancedCell && advancedCell.textContent.includes('Up to 15')) {
              advancedCell.textContent = advancedCell.textContent.replace('Up to 15', 'Up to 20');
              advancedCell.innerHTML = advancedCell.innerHTML.replace('Up to 15', 'Up to 20');
              updates.push('Data Sources Advanced: Up to 15 → Up to 20');
            }
          }
        }
        
        // Find Users row
        if (rowText.includes('Users') || rowText.includes('Number of Users')) {
          // Advanced is usually 3rd data cell
          if (cells.length > 2) {
            const advancedCell = cells[2];
            if (advancedCell && advancedCell.textContent.includes('Up to 25')) {
              advancedCell.textContent = advancedCell.textContent.replace('Up to 25', 'Up to 20');
              advancedCell.innerHTML = advancedCell.innerHTML.replace('Up to 25', 'Up to 20');
              updates.push('Users Advanced: Up to 25 → Up to 20');
            }
          }
        }
        
        // Find Dashboards row
        if (rowText.includes('Dashboards') || rowText.includes('Number of Dashboards')) {
          // Find Starter column - it's usually the first data column (index 0 or 1, depending on header)
          // Try to find by column header text
          const headerRow = rows[0];
          if (headerRow) {
            const headerCells = Array.from(headerRow.querySelectorAll('th, td, [class*="cell"], [class*="column"]'));
            const starterHeaderIndex = headerCells.findIndex(cell => {
              const headerText = cell.textContent || '';
              return headerText.toLowerCase().includes('starter') || headerText.toLowerCase().includes('small businesses');
            });
            
            if (starterHeaderIndex >= 0 && cells.length > starterHeaderIndex) {
              const starterCell = cells[starterHeaderIndex];
              if (starterCell) {
                const cellText = starterCell.textContent || '';
                // Update Starter to "Up to 5" if it's different
                if (cellText.includes('Up to') && !cellText.includes('Up to 5')) {
                  starterCell.textContent = cellText.replace(/Up to \d+/g, 'Up to 5');
                  starterCell.innerHTML = starterCell.innerHTML.replace(/Up to \d+/g, 'Up to 5');
                  updates.push('Dashboards Starter: updated to Up to 5');
                } else if (cellText.includes('Up to 3')) {
                  // Force update if it's "Up to 3"
                  starterCell.textContent = cellText.replace('Up to 3', 'Up to 5');
                  starterCell.innerHTML = starterCell.innerHTML.replace('Up to 3', 'Up to 5');
                  updates.push('Dashboards Starter: Up to 3 → Up to 5');
                }
              }
            }
          }
          
          // Fallback: Starter is usually 1st data cell (index 0 or 1, depending on header)
          if (cells.length > 0) {
            // Try index 0 first (if header is separate)
            let starterCell = cells[0];
            // If first cell looks like a header, try index 1
            if (starterCell && (starterCell.tagName === 'TH' || starterCell.textContent.includes('Dashboards'))) {
              starterCell = cells[1];
            }
            
            if (starterCell) {
              const cellText = starterCell.textContent || '';
              // Update Starter to "Up to 5" if it's different
              if (cellText.includes('Up to 3')) {
                starterCell.textContent = cellText.replace('Up to 3', 'Up to 5');
                starterCell.innerHTML = starterCell.innerHTML.replace('Up to 3', 'Up to 5');
                updates.push('Dashboards Starter: Up to 3 → Up to 5 (fallback)');
              } else if (cellText.includes('Up to') && !cellText.includes('Up to 5')) {
                starterCell.textContent = cellText.replace(/Up to \d+/g, 'Up to 5');
                starterCell.innerHTML = starterCell.innerHTML.replace(/Up to \d+/g, 'Up to 5');
                updates.push('Dashboards Starter: updated to Up to 5 (fallback)');
              }
            }
          }
        }
      });
    });
    
    if (updates.length > 0) {
      console.log('Pricing table updated:', updates);
    }
  }
  
  // Try multiple times
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePricingTable);
  } else {
    updatePricingTable();
  }
  
  setTimeout(updatePricingTable, 500);
  setTimeout(updatePricingTable, 1000);
  setTimeout(updatePricingTable, 2000);
  
  // Also listen for tab changes
  document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (pricingSection) {
      const tabLinks = pricingSection.querySelectorAll('.w-tab-link');
      tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function() {
          setTimeout(updatePricingTable, 500);
        });
      });
    }
  });
})();

