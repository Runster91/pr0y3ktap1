import './style.css';
import { drawTable } from './drawTable';
import { drawChart } from './chartDrawer';
import { drawPieChart } from './pieChartDrawer';


drawTable();

drawChart().then(result => console.log(result));

drawPieChart();
  