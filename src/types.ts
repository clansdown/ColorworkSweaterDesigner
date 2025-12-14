export class Motif {
    id: string;
    width: number;
    height: number;

    constructor(id: string, width: number, height: number) {
        this.id = id;
        this.width = width;
        this.height = height;
    }
}

export class Sweater {
    verticalGauge: number;
    horizontalGauge: number;
    type: "ez_yolk";
    motifs: Motif[];
    bodyMotifs: string[];
    armMotifs: string[];
    yolkMotifs: string[];

    constructor(verticalGauge: number, horizontalGauge: number, type: "ez_yolk", motifs: Motif[], bodyMotifs: string[], armMotifs: string[], yolkMotifs: string[]) {
        this.verticalGauge = verticalGauge;
        this.horizontalGauge = horizontalGauge;
        this.type = type;
        this.motifs = motifs;
        this.bodyMotifs = bodyMotifs;
        this.armMotifs = armMotifs;
        this.yolkMotifs = yolkMotifs;
    }
}