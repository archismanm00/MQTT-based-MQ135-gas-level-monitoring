import{ Bar } from 'react-chartjs-2';
import{ CategoryScale, Chart as ChartJS } from 'chart.js/auto';
import dt from './quarantine/dt.json';

ChartJS.register(CategoryScale);


let dtchk:any;

if(dt.hasOwnProperty("gas")){

    dtchk = dt;
}


function barGraph(){
    return<>
        <div style = {{margin: "100px"}}>
        <Bar
          
          data = {{
            labels: dt.map(gsNm => gsNm.gas),
            
            
            datasets: [
                {
                    label: 'Gas levels in Ppm',
                    data: dt.map(gsLvl => gsLvl.ppm),
                    
                    backgroundColor: '#ffd1d4' ,
                    
                  }
                
            ]
           
            
          }}
          
          height = {600}
          width = {800}
        />
        </div>
    </>
}

export default barGraph;