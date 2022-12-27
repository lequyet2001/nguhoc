import { points, triangleCoords, } from "./Src/data";
import { Point} from './Src/class';
import { g } from './Src/makedt';

let map: google.maps.Map;
let Marker: google.maps.Marker[] = [];
let flightPath: google.maps.Polyline;
const path:Point[] = [];
const PATH_MAIN_MAP = {
    zoom: 16,
    center: { lat: 21.001590, lng: 105.845727 },
}
console.log(g.dijkstra("1","34"))
console.log(g.dijkstra("34","106"))
console.log(g.dijkstra("1","106"))
console.log(g.dijkstra("1","127"))

function autoAddOptions(selectId: string, options: Point[]) {
    const select = document.getElementById(selectId);
    options.forEach((option) => {
        const newOption = document.createElement("option");
        newOption.value = option.name;
        newOption.text = option.name;
        select?.appendChild(newOption);
    });
}
autoAddOptions("start", points);
autoAddOptions("diem1", points);
autoAddOptions("diem2", points);
autoAddOptions("diem3", points);
function consvertStringToPoint(params: string[]):Point[] {
    const x: Point[] = [];
    params.forEach(e => {
        points.forEach(e2 => {
            if (e === e2.name) {
                x.push(e2);
            }
        })
    })
    return x;
}
function bt1() {
    const start = document.getElementById('start') as HTMLSelectElement;
    const a = document.getElementById('diem1') as HTMLSelectElement;
    const b = document.getElementById('diem2') as HTMLSelectElement;
    const c = document.getElementById('diem3') as HTMLSelectElement;
    const StartValue = start.value.toLocaleUpperCase();
    const diem1 = a.value;
    const diem2 = b.value;
    const diem3 = c.value;
    const start_diem1 = g.dijkstra(StartValue, diem1);

    const diem1_diem2 = g.dijkstra(diem1, diem2);

    const diem2_diem3 = g.dijkstra(diem2, diem3);
   
   
    const p: string[] = [];
    start_diem1.path.forEach(e => {
        p.push(e)
    })
    diem1_diem2.path.forEach(e => {
        p.push(e)
    })
    diem2_diem3.path.forEach(e => {
        p.push(e)
    })
  
    
    const modifiedData = [];

    // Iterate through the data array and compare each element to the one before it
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== p[i - 1]) {
            modifiedData.push(p[i]);
        }
    }
   
   const point:Point[] = consvertStringToPoint(modifiedData);
    point.forEach(e=>path.push(e));
    console.log(point);

   
    flightPath = new google.maps.Polyline({
        path: point,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    flightPath.setMap(map);
    let m = (e: Point, index: number) => {
        Marker[index] = new google.maps.Marker({
            position: e,
            map,
            label: e.name,
            title: "Nhóm em chấm điểm vô trách nghiệm thầy thông cảm",
        })
    }
    point.forEach(m)
   

}
function reSet() {
    path.forEach((e, index) => {
        Marker[index].setMap(null)
        flightPath.setMap(null)
    })
    path.splice(0, path.length);
    
}
function bt2() {
    const start = document.getElementById('start') as HTMLSelectElement;
    const a = document.getElementById('diem1') as HTMLSelectElement;
    const b = document.getElementById('diem2') as HTMLSelectElement;
    const c = document.getElementById('diem3') as HTMLSelectElement;
    const StartValue = start.value.toLocaleUpperCase();
    const diem1 = a.value.toLocaleUpperCase();
    const diem2 = b.value.toLocaleUpperCase();
    const diem3 = c.value.toLocaleUpperCase();
    const start_diem1 = g.dijkstra(StartValue, diem1);
    const start_diem2 = g.dijkstra(StartValue, diem2);
    const start_diem3 = g.dijkstra(StartValue, diem3);

    const diem1_diem2 = g.dijkstra(diem1, diem2);
    const diem1_diem3 = g.dijkstra(diem1, diem3);
    const diem2_diem3 = g.dijkstra(diem2, diem3);

    const a1=consvertStringToPoint(start_diem1.path);
    const a2=consvertStringToPoint(start_diem2.path);
    const a3=consvertStringToPoint(start_diem3.path);
    const b1=consvertStringToPoint(diem1_diem2.path);
    const b2=consvertStringToPoint(diem1_diem3.path);
    const c1=consvertStringToPoint(diem2_diem3.path);

    const lol:{distance:number,path:Point[],name:string}[]=[
        {distance:start_diem1.distance,path:a1,name:"start_diem1:1"},
        {distance:start_diem2.distance,path:a2,name:"start_diem2:2"},
        {distance:start_diem3.distance,path:a3,name:"start_diem3:3"},
        {distance:diem1_diem2.distance,path:b1,name:"diem1_diem2:4"},
        {distance:diem1_diem3.distance,path:b2,name:"diem1_diem3:5"},
        {distance:diem2_diem3.distance,path:c1,name:"diem2_diem3:6"},
    ]   

    // console.log(lol);
    lol.sort((a, b) => a.distance - b.distance);
    const lol2:Point[]=[];
    lol.forEach(e=>{
        e.path.forEach(e2=>{
            lol2.push(e2);
        })
    })
    console.log(lol2);
    


    // let m = (e: Point, index: number) => {
    //     Marker[index] = new google.maps.Marker({
    //         position: e,
    //         map,
    //         label: e.name,
    //         title: "Nhóm em chấm điểm vô trách nghiệm thầy thông cảm",
    //     })
    // }
    // points.forEach(m)
}





const submit = document.getElementById('b1');
submit?.addEventListener('click', bt1);
const submit2 = document.getElementById('b2');
submit2?.addEventListener('click', bt2);
const rm = document.getElementById('rm');
rm?.addEventListener('click', reSet);

function initMap(): void {
    map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        PATH_MAIN_MAP
    );

    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "white",
        fillOpacity: 0.35,
    });

    bermudaTriangle.setMap(map);





}
declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
export { };

