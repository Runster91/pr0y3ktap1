import './style.css';
import { drawTable } from './drawTable';
import { drawChart } from './chartDrawer';


drawTable();

drawChart().then(result => console.log(result));

  