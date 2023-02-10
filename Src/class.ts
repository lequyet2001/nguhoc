
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

export class weightedGraph {
    adjacenyList;
    constructor() {
        this.adjacenyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacenyList[vertex]) {
            this.adjacenyList[vertex] = [];
        }
    }


    addEdge(vertex1, vertex2, point: Point[]) {
        let weight = 0;
        const point1: Point = point.find(p => p.name === vertex1) || new Point(0, 0, "0");
        const point2: Point = point.find(p => p.name === vertex2) || new Point(0, 0, "0");
        weight = point1.distanceTo(point2);
        this.adjacenyList[vertex1].push({ node: vertex2, weight });
        this.adjacenyList[vertex2].push({ node: vertex1, weight });
        // console.log(`distance between ${vertex1} and ${vertex2} is ${weight}`);
    }
    addEdge2(a,b,c){
        this.adjacenyList[a].push({ node: b, c });
        this.adjacenyList[b].push({ node: a, c });
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

    dijkstra(start: string, end: string) {
        const nodes = new priorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        let distance = 0;
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
                    distance += this.adjacenyList[previous[smallest]].find(n => n.node === smallest).weight;
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

        return {
            distance,
            path: path.concat(smallest).reverse()
        };
    }
   

    TSP(start) {
        let visited = [];
        let path = [];
        let minPath = Infinity;
        let currentPath = 0;
        let vertices = Object.keys(this.adjacenyList);
    
        const tspHelper = (vertex , visited , currentPath) => {
          path.push(vertex);
          visited[vertex] = true;
          if (path.length === vertices.length) {
            for (let i = 0; i < this.adjacenyList[vertex].length; i++) {
              if (this.adjacenyList[vertex][i].node === start) {
                currentPath += this.adjacenyList[vertex][i].weight;
                if (currentPath < minPath) {
                  minPath = currentPath;
                  path.push(start);
                }
              }
            }
            return;
          }
          for (let i = 0; i < this.adjacenyList[vertex].length; i++) {
            let currentNode = this.adjacenyList[vertex][i].node;
            let weight = this.adjacenyList[vertex][i].weight;
            if (!visited[currentNode]) {
              tspHelper.call(this, currentNode, visited, currentPath + weight);
            }
          }
          path.pop();
          visited[vertex] = false;
        }
    
        tspHelper.call(this, start, visited, currentPath);
    
        return {
          path: path
          }
        }

}



export class Point {

    constructor(public lat: number, public lng: number, public name: string) { }

    // Hàm tính khoảng cách giữa hai điểm
    distanceTo(other: Point): number {
        const R = 6371e3; // Số bán kính của Trái Đất, đơn vị mét
        const φ1 = this.lat * Math.PI / 180;
        const φ2 = other.lat * Math.PI / 180;
        const Δφ = (other.lat - this.lat) * Math.PI / 180;
        const Δλ = (other.lng - this.lng) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
}

