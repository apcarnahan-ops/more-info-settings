enum ExtraLogicOp {
    //% block="xor"
    Xor,
    //% block="xand"
    Xand
}

namespace logic {

    //% blockId=logic_extra_xand_op
    //% block="$a $op $b"
    //% a.shadow="unset"
    //% b.shadow="unset"
    //% op.defl=ExtraLogicOp.Xand
    //% group="Boolean"
    //% weight=85
    export function extraXandGate(a: any, op: ExtraLogicOp, b: any): boolean {
        return extraXorGate(a, op, b);
    }


    //% blockId=logic_extra_xor_op
    //% block="$a $op $b"
    //% a.shadow="unset"
    //% b.shadow="unset"
    //% group="Boolean"
    //% weight=84
    export function extraXorGate(a: any, op: ExtraLogicOp, b: any): boolean {
        const boolA = !!a;
        const boolB = !!b;
        if (op === ExtraLogicOp.Xor) {
            return boolA != boolB;
        } else {
            return boolA == boolB;
        }
    }
}
