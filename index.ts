
import { points, triangleCoords } from "./Src/data";
import { Point, } from './Src/class';
import { g } from './Src/makedt'

let map: google.maps.Map;
let Marker: google.maps.Marker[] = [];
let flightPath: google.maps.Polyline;

const PATH_MAIN_MAP = {
    zoom: 16,
    center: { lat: 21.001590, lng: 105.845727 },
}

function autoAddOptions(selectId: string, options: Point[]) {
    const select = document.getElementById(selectId);
    options.forEach((option) => {
        const newOption = document.createElement("option");
        newOption.value = option.name;
        newOption.text = option.name;
        select?.appendChild(newOption);
    });
}


autoAddOptions("start", points)
autoAddOptions("diem1", points)
autoAddOptions("diem2", points)
autoAddOptions("diem3", points)


const submit = document.getElementById('submit');
submit?.addEventListener('click', () => {
    const start = document.getElementById('start') as HTMLSelectElement;
    const a = document.getElementById('diem1') as HTMLSelectElement;
    const b = document.getElementById('diem2') as HTMLSelectElement;
    const c = document.getElementById('diem3') as HTMLSelectElement;
    const StartValue = start.value.toLocaleUpperCase();
    const diem1 = a.value.toLocaleUpperCase();
    const diem2 = b.value.toLocaleUpperCase();
    const diem3 = c.value.toLocaleUpperCase();
    const start_diem1 = g.dijkstra(StartValue, diem1);
    const start_diem2=g.dijkstra(StartValue,diem2);
    const start_diem3=g.dijkstra(StartValue,diem3);

    const diem1_diem2 = g.dijkstra(diem1, diem2);
    const diem1_diem3 = g.dijkstra(diem1, diem3);
    const diem2_diem3 = g.dijkstra(diem2, diem3);

    // const diem2_diem3 = g.dijkstra(diem2, diem3);
    // const start21=g.dijkstra(StartValue,diem2)
    console.log(start_diem1)
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
    const distance = diem1_diem2.distance + diem2_diem3.distance + start_diem1.distance;
    console.log(distance)
    

    const modifiedData = [];
    const point: Point[] = [];
    // Iterate through the data array and compare each element to the one before it
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== p[i - 1]) {
            modifiedData.push(p[i]);
        }
    }
    console.log(modifiedData)
    modifiedData.forEach(e => {
        points.forEach(e2 => {
            if (e === e2.name) {
                point.push(e2)
            }
        })
    })
    console.log(point)
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
        })
    }
    point.forEach(m)
    const rm = document.getElementById('rm');
    rm?.addEventListener('click', reSet)
    function reSet() {
        point.forEach((e, index) => {

            Marker[index].setMap(null)
            flightPath.setMap(null)
        })
    }

})

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

