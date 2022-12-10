
// Infinity = 10000;

class priorityQueue {
    values;
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class weightedGraph {
    adjacenyList;
    constructor() {
        this.adjacenyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacenyList[vertex]) {
            this.adjacenyList[vertex] = [];
        }
    }
    add(data) {
        this.addVertex(data);
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacenyList[vertex1].push({ node: vertex2, weight });
        this.adjacenyList[vertex2].push({ node: vertex1, weight });
    }

    removeEdge(vertex1, vertex2) {
        this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        const edges = this.adjacenyList[vertex];
        edges.forEach(e => this.removeEdge(e, vertex));
        delete this.adjacenyList[vertex];
    }

    dijkstra(start, end) {
        const nodes = new priorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // build up initial state
        for (let vertex in this.adjacenyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity; // Should be Infinity, but stackblitz seems to have issues with that
                nodes.enqueue(vertex, Infinity); // Should be Infinity, but stackblitz seems to have issues with that
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacenyList[smallest]) {
                    let nextNode = this.adjacenyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // update new smallest distnace to neighbor
                        distances[nextNeighbor] = candidate;
                        // update previous = how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enque in priority queue with new PriorityQueue
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}

console.clear();

const data = [
    { lat: 25.774, lng: -80.19, name: "A" },
    { lat: 18.466, lng: -66.118, name: "B" },
    { lat: 32.321, lng: -67.757, name: "C" },
    { lat: 32.321, lng: -68.757, name: "D" },
    { lat: 32.321, lng: -69.757, name: "E" },
    { lat: 32.321, lng: -61.757, name: "F" },
];


let g = new weightedGraph();

console.log("adding vertices -------------------------------");
data.forEach(e => {
    g.add(e.name)
});

console.log("adding edges -------------------------------");
g.addEdge("A", "B", 1);
g.addEdge("A", "C", 1);
g.addEdge("B", "E", 1);
g.addEdge("C", "D", 1);
g.addEdge("C", "F", 1);
g.addEdge("D", "E", 1);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

// console.log())
const a = g.dijkstra("A", "E")
console.log(a)



const PATH_MAIN_MAP = {
    zoom: 15,
    center: { lat: 21.004517, lng: 105.845028 },
}


//loadamap
var map
const submit = document.getElementById('submit');
submit?.addEventListener('click', () => {
    const a = document.getElementById('start') as HTMLInputElement;
    const x = a.value.toLocaleUpperCase();
    const c = document.getElementById('end') as HTMLInputElement;
    const z = c.value;
    const b = document.getElementById('mid') as HTMLInputElement;
    const y = b.value.toLocaleUpperCase();
    const newData1 = [x];
    const newData2 = [y];





})
function initMap(): void {
    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        PATH_MAIN_MAP
    );

    const triangleCoords = [
        { lat: 21.007482, lng: 105.841508 },
        { lat: 21.008586, lng: 105.851404 },
        { lat: 20.995940, lng: 105.849861 },
        { lat: 20.997845, lng: 105.841256 },
    ];

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
