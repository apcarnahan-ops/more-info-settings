namespace Math {
    /**
     * Pick a random number from min to max with a weight bias.
     * bias > 1 favors higher numbers (closer to max).
     * bias < 1 favors lower numbers (closer to min).
     * bias = 1 is normal equal random.
     */
    //% block="pick random $min to $max with weight $bias"
    //% min.defl=0 max.defl=10 bias.defl=2
    //% weight=34
    export function pickWeightedRange(min: number, max: number, bias: number): number {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        if (bias <= 0) bias = 1;

        let r = Math.pow(Math.random(), 1 / bias);
        return Math.floor(r * (max - min + 1)) + min;
    }

    /**
     * Pick a random number from a list of numbers using matching weights
     */
    //% block="pick random number from $numbers with weights $weights"
    //% weight=33
    export function pickWeightedNumber(numbers: number[], weights: number[]): number {
        let total = 0;
        for (let w of weights) {
            total += w;
        }
        let roll = Math.random() * total;
        for (let i = 0; i < weights.length; i++) {
            roll -= weights[i];
            if (roll <= 0) {
                return numbers[i];
            }
        }
        return numbers[numbers.length - 1];
    }
}
