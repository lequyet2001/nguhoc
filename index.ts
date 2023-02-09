import { points, triangleCoords, } from "./Src/data";
import { Point } from './Src/class';
import { g } from './Src/makedt';
import { Console } from "console";


let map: google.maps.Map;
let Marker: google.maps.Marker[] = [];
let Marker2: google.maps.Marker[] = [];
let flightPath: google.maps.Polyline;
let flightPath2: google.maps.Polyline;
const path: Point[] = [];
const path2: Point[] = [];
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
autoAddOptions("start", points);
autoAddOptions("diem1", points);
autoAddOptions("diem2", points);
autoAddOptions("diem3", points);
function consvertStringToPoint(params: String[], distance: Number): any {
    const x: Point[] = [];
    params.forEach(e => {
        points.forEach(e2 => {
            if (e === e2.name) {
                x.push(e2);
            }
        })
    })

    return [x, distance];
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

    console.log("start_diem1:", start_diem1)
    const modifiedData = [];

    // Iterate through the data array and compare each element to the one before it
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== p[i - 1]) {
            modifiedData.push(p[i]);
        }
    }

    const point: any = consvertStringToPoint(modifiedData, 0);
    point[0].forEach(e => path.push(e));
    console.log(point[0]);


    flightPath = new google.maps.Polyline({
        path: point[0],
        geodesic: true,
        strokeColor: "black",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    flightPath.setMap(map);
    let m = (e: Point, index: number) => {
        Marker[index] = new google.maps.Marker({
            position: e,
            map,
            label: e.name,
            // color:black,
            // title: "Nhóm em chấm điểm vô trách nghiệm thầy thông cảm",
        })
    }
    point[0].forEach(m)

}

function reSet() {
    path.forEach((e, index) => {
        Marker[index].setMap(null)
        flightPath.setMap(null)
    })
    path.splice(0, path.length);
    path2.forEach((e, index) => {
        Marker2[index].setMap(null)
        flightPath2.setMap(null)
    })
    path2.splice(0, path.length);

}
function bt2() {
    const start = document.getElementById('start') as HTMLSelectElement;
    const a = document.getElementById('diem1') as HTMLSelectElement;
    const b = document.getElementById('diem2') as HTMLSelectElement;
    const c = document.getElementById('diem3') as HTMLSelectElement;
    const StartValue = start.value.toLocaleUpperCase();
    const diem1 = a.value;
    const diem2 = b.value;
    const diem3 = c.value;
    const start_A = g.dijkstra(StartValue, diem1);
    const start_B = g.dijkstra(StartValue, diem2);
    const start_C = g.dijkstra(StartValue, diem3);

    const A_B = g.dijkstra(diem1, diem2);
    const B_A = g.dijkstra(diem2, diem1);

    const A_C = g.dijkstra(diem1, diem3);
    const C_A = g.dijkstra(diem3, diem1);

    const B_C = g.dijkstra(diem2, diem3);
    const C_B = g.dijkstra(diem3, diem2);

    const src = [start_A, start_B, start_C, A_B, B_A, A_C, C_A, B_C, C_B];
    // console.log(src);


    const sA = consvertStringToPoint(start_A.path, start_A.distance);
    const sB = consvertStringToPoint(start_B.path, start_B.distance);
    const sC = consvertStringToPoint(start_C.path, start_B.distance);

    const aB = consvertStringToPoint(A_B.path, A_B.distance);
    const bA = consvertStringToPoint(B_A.path, B_A.distance);

    const aC = consvertStringToPoint(A_C.path, A_C.distance);
    const cA = consvertStringToPoint(C_A.path, C_A.distance);

    const bC = consvertStringToPoint(B_C.path, B_C.distance);
    const cB = consvertStringToPoint(C_B.path, C_B.distance);

    const p = {sA, sB, sC, aB, bA, aC, cA, bC, cB};
    
    // flightPath2 = new google.maps.Polyline({
    //     path: v,
    //     geodesic: true,
    //     strokeColor: "green",
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2,
    // });

    // flightPath2.setMap(map);
    // let m = (e: Point, index: number) => {
    //     Marker2[index] = new google.maps.Marker({
    //         position: e,
    //         map,
    //         label: e.name,
    //     })
    // }
    // v.forEach(m)
    // v.forEach(e => path2.push(e));
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

