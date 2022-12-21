

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
    addEdge(to:Point){
    // this.Edges
    }
    
}
export function findShortestPath(points: Point[]): Point[] {
    // Khởi tạo danh sách các điểm đã xét và điểm hiện tại là điểm đầu tiên trong mảng points
    const visitedPoints: Point[] = [];
    let currentPoint = points[0];
    visitedPoints.push(currentPoint);

    // Lặp lại các bước 1-3 cho đến khi tất cả các điểm đã được xét
    while (visitedPoints.length < points.length) {
        // Tìm điểm gần nhất với điểm hiện tại
        let closestPoint: Point | undefined;
        let closestDistance = Number.MAX_VALUE;
        for (const point of points) {
            if (!visitedPoints.includes(point)) {
                const distance = currentPoint.distanceTo(point);
                if (distance < closestDistance) {
                    closestPoint = point;
                    closestDistance = distance;
                }
            }
        }

        // Cập nhật điểm hiện tại là điểm gần nhất và thêm điểm gần nhất vào danh sách các điểm đã được xét
        currentPoint = closestPoint!;
        visitedPoints.push(currentPoint);
    }

    return visitedPoints;
}


