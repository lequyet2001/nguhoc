
// Infinity = 10000;

import { weightedGraph } from "./Src/class"
// console.clear();
import { Point, findShortestPath } from './Src/a'
import { data, newData, triangleCoords } from "./Src/data";

const points: Point[] = newData.map(([lat, lng, name]) => new Point(lat, lng, name));
console.log(findShortestPath(points)[1].name)
let g = new weightedGraph();

console.log("adding vertices -------------------------------");
points.forEach(e => {
    g.add(e.name)
});

console.log("adding edges -------------------------------");
g.addEdge("1", "2", 1);
g.addEdge("1", "5", 1);
g.addEdge("2", "4", 1);
g.addEdge("2", "3", 1);
g.addEdge("3", "6", 1);
g.addEdge("5", "15", 1);
g.addEdge("6", "7", 1);
g.addEdge("6", "13", 1);
g.addEdge("7", "8", 1);
g.addEdge("8", "9", 1);
g.addEdge("9", "10", 1);
g.addEdge("10", "11", 1);
g.addEdge("10", "12", 1);
g.addEdge("13", "14", 1);
g.addEdge("15", "16", 1);
g.addEdge("15", "38", 1);
g.addEdge("16", "17", 1);
g.addEdge("16", "21", 1);
g.addEdge("17", "18", 1);
g.addEdge("17", "19", 1);
g.addEdge("18", "19", 1);
g.addEdge("18", "20", 1);
g.addEdge("20", "23", 1);
g.addEdge("21", "22", 1);
g.addEdge("21", "41", 1);
g.addEdge("22", "23", 1);
g.addEdge("22", "24", 1);
g.addEdge("23", "24", 1);
g.addEdge("24", "25", 1);
g.addEdge("25", "105", 1);
g.addEdge("26", "27", 1);
g.addEdge("26", "28", 1);
g.addEdge("28", "29", 1);
g.addEdge("29", "30", 1);
g.addEdge("29", "34", 1);
g.addEdge("30", "31", 1);
g.addEdge("30", "33", 1);
g.addEdge("31", "32", 1);
g.addEdge("34", "36", 1);
g.addEdge("35", "36", 1);
g.addEdge("36", "37", 1);
g.addEdge("37", "104", 1);
g.addEdge("37", "163", 1);
g.addEdge("38", "39", 1);
g.addEdge("38", "40", 1);
g.addEdge("39", "40", 1);
g.addEdge("39", "42", 1);
g.addEdge("40", "41", 1);
g.addEdge("41", "51", 1);
g.addEdge("41", "55", 1);
g.addEdge("42", "43", 1);
g.addEdge("43", "44", 1);
g.addEdge("44", "45", 1);
g.addEdge("45", "46", 1);
g.addEdge("45", "55", 1);
g.addEdge("46", "47", 1);
g.addEdge("46", "58", 1);
g.addEdge("46", "60", 1);
g.addEdge("47", "48", 1);
g.addEdge("47", "60", 1);
g.addEdge("48", "49", 1);
g.addEdge("48", "50", 1);
g.addEdge("49", "92", 1);
g.addEdge("49", "96", 1);
g.addEdge("50", "61", 1);
g.addEdge("51", "52", 1);
g.addEdge("51", "75", 1);
g.addEdge("52", "53", 1);
g.addEdge("53", "54", 1);
g.addEdge("53", "56", 1);
g.addEdge("55", "56", 1);
g.addEdge("56", "57", 1);
g.addEdge("57", "58", 1);
g.addEdge("58", "59", 1);
g.addEdge("58", "60", 1);
g.addEdge("60", "61", 1);
g.addEdge("60", "62", 1);
g.addEdge("61", "65", 1);
g.addEdge("62", "63", 1);
g.addEdge("62", "64", 1);
g.addEdge("64", "67", 1);
g.addEdge("64", "68", 1);
g.addEdge("65", "66", 1);
g.addEdge("65", "68", 1);
g.addEdge("67", "73", 1);
g.addEdge("68", "69", 1);
g.addEdge("68", "70", 1);
g.addEdge("70", "71", 1);
g.addEdge("70", "74", 1);
g.addEdge("72", "73", 1);
g.addEdge("72", "75", 1);
g.addEdge("72", "77", 1);
g.addEdge("73", "74", 1);
g.addEdge("74", "77", 1);
g.addEdge("74", "79", 1);
g.addEdge("75", "76", 1);
g.addEdge("77", "78", 1);
g.addEdge("79", "80", 1);
g.addEdge("79", "81", 1);
g.addEdge("80", "83", 1);
g.addEdge("80", "102", 1);
g.addEdge("81", "82", 1);
g.addEdge("81", "84", 1);
g.addEdge("82", "83", 1);
g.addEdge("82", "85", 1);
g.addEdge("83", "86", 1);
g.addEdge("84", "85", 1);
g.addEdge("84", "87", 1);
g.addEdge("84", "88", 1);
g.addEdge("85", "86", 1);
g.addEdge("86", "87", 1);
g.addEdge("86", "99", 1);
g.addEdge("87", "89", 1);
g.addEdge("87", "98", 1);
g.addEdge("88", "89", 1);
g.addEdge("89", "90", 1);
g.addEdge("90", "94", 1);
g.addEdge("90", "97", 1);
g.addEdge("91", "92", 1);
g.addEdge("91", "94", 1);
g.addEdge("92", "93", 1);
g.addEdge("93", "94", 1);
g.addEdge("94", "95", 1);
g.addEdge("95", "96", 1);
g.addEdge("95", "97", 1);
g.addEdge("96", "170", 1);
g.addEdge("97", "98", 1);
g.addEdge("97", "169", 1);
g.addEdge("98", "99", 1);
g.addEdge("98", "168", 1);
g.addEdge("99", "100", 1);
g.addEdge("100", "101", 1);
g.addEdge("101", "102", 1);
g.addEdge("101", "168", 1);
g.addEdge("102", "103", 1);
g.addEdge("103", "104", 1);
g.addEdge("103", "164", 1);
g.addEdge("104", "105", 1);
g.addEdge("106", "107", 1);
g.addEdge("107", "108", 1);
g.addEdge("107", "127", 1);
g.addEdge("108", "109", 1);
g.addEdge("108", "110", 1);
g.addEdge("110", "111", 1);
g.addEdge("111", "112", 1);
g.addEdge("112", "113", 1);
g.addEdge("112", "115", 1);
g.addEdge("113", "114", 1);
g.addEdge("113", "156", 1);
g.addEdge("114", "120", 1);
g.addEdge("114", "158", 1);
g.addEdge("115", "116", 1);
g.addEdge("115", "117", 1);
g.addEdge("115", "119", 1);
g.addEdge("118", "119", 1);
g.addEdge("119", "120", 1);
g.addEdge("119", "122", 1);
g.addEdge("120", "123", 1);
g.addEdge("121", "122", 1);
g.addEdge("122", "123", 1);
g.addEdge("122", "125", 1);
g.addEdge("123", "126", 1);
g.addEdge("124", "125", 1);
g.addEdge("125", "126", 1);
g.addEdge("125", "129", 1);
g.addEdge("126", "130", 1);
g.addEdge("127", "129", 1);
g.addEdge("127", "131", 1);
g.addEdge("128", "129", 1);
g.addEdge("129", "130", 1);
g.addEdge("130", "131", 1);
g.addEdge("131", "132", 1);
g.addEdge("132", "133", 1);
g.addEdge("132", "139", 1);
g.addEdge("133", "134", 1);
g.addEdge("133", "135", 1);
g.addEdge("134", "136", 1);
g.addEdge("134", "137", 1);
g.addEdge("137", "138", 1);
g.addEdge("137", "159", 1);
g.addEdge("138", "139", 1);
g.addEdge("139", "140", 1);
g.addEdge("140", "141", 1);
g.addEdge("141", "142", 1);
g.addEdge("142", "143", 1);
g.addEdge("144", "145", 1);
g.addEdge("145", "146", 1);
g.addEdge("145", "147", 1);
g.addEdge("147", "148", 1);
g.addEdge("147", "149", 1);
g.addEdge("147", "150", 1);
g.addEdge("150", "151", 1);
g.addEdge("150", "153", 1);
g.addEdge("151", "161", 1);
g.addEdge("152", "153", 1);
g.addEdge("152", "155", 1);
g.addEdge("153", "154", 1);
g.addEdge("154", "155", 1);
g.addEdge("154", "157", 1);
g.addEdge("155", "156", 1);
g.addEdge("156", "157", 1);
g.addEdge("157", "158", 1);
g.addEdge("158", "159", 1);
g.addEdge("159", "160", 1);
g.addEdge("161", "162", 1);
g.addEdge("164", "165", 1);
g.addEdge("164", "167", 1);
g.addEdge("165", "166", 1);
g.addEdge("166", "167", 1);
g.addEdge("168", "169", 1);
g.addEdge("169", "170", 1);
g.addEdge("170", "171", 1);
g.addEdge("171", "172", 1);
g.addEdge("171", "174", 1);
g.addEdge("172", "173", 1);
g.addEdge("174", "175", 1);
g.addEdge("174", "180", 1);
g.addEdge("175", "176", 1);
g.addEdge("175", "177", 1);
g.addEdge("177", "178", 1);
g.addEdge("177", "180", 1);
g.addEdge("178", "179", 1);
g.addEdge("178", "182", 1);
g.addEdge("181", "182", 1);
g.addEdge("182", "183", 1);
g.addEdge("183", "184", 1);
g.addEdge("184", "185", 1);
g.addEdge("184", "198", 1);
g.addEdge("185", "186", 1);
g.addEdge("186", "187", 1);
g.addEdge("186", "189", 1);
g.addEdge("187", "188", 1);
g.addEdge("189", "190", 1);
g.addEdge("189", "191", 1);
g.addEdge("191", "192", 1);
g.addEdge("192", "207", 1);
g.addEdge("192", "215", 1);
g.addEdge("193", "196", 1);
g.addEdge("193", "199", 1);
g.addEdge("193", "200", 1);
g.addEdge("193", "210", 1);
g.addEdge("194", "196", 1);
g.addEdge("195", "196", 1);
g.addEdge("196", "197", 1);
g.addEdge("197", "198", 1);
g.addEdge("200", "201", 1);
g.addEdge("200", "202", 1);
g.addEdge("200", "203", 1);
g.addEdge("203", "204", 1);
g.addEdge("203", "205", 1);
g.addEdge("204", "206", 1);
g.addEdge("207", "208", 1);
g.addEdge("207", "209", 1);
g.addEdge("208", "210", 1);
g.addEdge("210", "211", 1);
g.addEdge("210", "212", 1);
g.addEdge("211", "213", 1);
g.addEdge("213", "214", 1);

const PATH_MAIN_MAP = {
    zoom: 16,
    center: { lat: 21.001590, lng: 105.845727 },
}

//loadamap
let map: google.maps.Map;
let Marker: google.maps.Marker[] = [];
let flightPath: google.maps.Polyline;
const submit = document.getElementById('submit');
submit?.addEventListener('click', () => {

    const start = document.getElementById('start') as HTMLInputElement;
    const a = document.getElementById('diem1') as HTMLInputElement;
    const b = document.getElementById('diem2') as HTMLInputElement;
    const c = document.getElementById('diem3') as HTMLInputElement;
    const StartValue = start.value.toLocaleUpperCase();
    const x = a.value.toLocaleUpperCase();
    const y = b.value.toLocaleUpperCase();
    const z = c.value.toLocaleUpperCase();
    const a1 = g.dijkstra(StartValue, x)
    const b1 = g.dijkstra(x, y)
    const c1 = g.dijkstra(y, z)
    const p: string[] = [];
    a1.forEach(e => {
        p.push(e)
    })

    b1.forEach(e => {
        p.push(e)
    })
    c1.forEach(e => {
        p.push(e)
    })
    // console.log(p)

    const modifiedData = [];
    const point: Point[] = [];
    // Iterate through the data array and compare each element to the one before it
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== p[i - 1]) {
            modifiedData.push(p[i]);
        }
    }
    modifiedData.forEach(e => {
        points.forEach(e2 => {
            if (e === e2.name) {
                point.push(e2)
            }
        })
    })

    flightPath = new google.maps.Polyline({
        path: point,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    flightPath.setMap(map);


    // console.log(modifiedData);  // ['1', '2', '4', '2', '1', '5', '1', '2', '3', '6', '7', '8', '9', '10']
    point.forEach((e, index) => {
        console.log(e.name)
    })
    console.log(point)

    let m = (e: Point, index: number) => {
        Marker[index] = new google.maps.Marker({
            position: e,
            map,
            label: e.name,
        })

        console.log(index)
    }
    point.forEach(m)


    const rm = document.getElementById('rm');
    rm?.addEventListener('click',reSet)
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

