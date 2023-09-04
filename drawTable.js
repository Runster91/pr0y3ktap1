export async function drawTable() {
    try {
      const response = await fetch('http://localhost:3000/langues');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      const canvas = document.getElementById('tableCanvas');
      const ctx = canvas.getContext('2d');
  
      // Set up table dimensions and styles
      const cellWidth = 160;
      const cellHeight = 30;
      ctx.font = '16px sans-serif';
      ctx.lineWidth = 1;
  
      // Draw table header
      ctx.fillText('Language', 10, 30);
      ctx.fillText('Parleurs Natif', 120, 30);
      ctx.beginPath();
      ctx.moveTo(0, 40);
      ctx.lineTo(600, 40);
      ctx.stroke();
  
      // Draw table rows
      data.forEach((langue, index) => {
        const y = 70 + (index * cellHeight);
  
        // Use the correct property names based on your API response structure
        ctx.fillText(langue.langue || '', 10, y); // 'langue' property for language name
        ctx.fillText(langue['parleurs natif'] || '', 120, y); // 'parleurs natif' property for native speakers count
  
        ctx.beginPath();
        ctx.moveTo(0, y + 10);
        ctx.lineTo(600, y + 10);
        ctx.stroke();
      });
    } catch (error) {
      console.error('Error fetching or drawing table:', error);
    }
  }
  
  // Call the function when the script loads
  drawTable();