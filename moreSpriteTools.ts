
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */

namespace sprites {
    /**
     * Move the selected sprite in pixels
     * @param sprite sprite
     * @param X number, eg: 0
     * @param Y number, eg: 0
     */
    //% block="change $sprite position by x $X y $Y"
    //% group="Physics"
    //% weight=60
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    export function moveSprite(sprite: Sprite, X: number, Y: number): void {
        sprite.setPosition(sprite.x + X, sprite.y + Y);
    }
}
