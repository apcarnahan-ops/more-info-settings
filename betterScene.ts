
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum BuiltInPalette {
    //% block="Original"
    Original,
    //% block="Grayscale"
    Grayscale,
    //% block="Adventure"
    Adventure,
    //% block="Matte"
    Matte,
    //% block="Pastel"
    Pastel,
    //% block="Adafruit"
    Adafruit,
    //% block="SteamPunk"
    SteamPunk,
    //% block="Black & White"
    BlackAndWhite,
    //% block="Poke"
    Poke
}


namespace scene {

    const palettes: { [key: number]: Buffer } = {
        [BuiltInPalette.Original]: hex`000000ffffff ff2121ff93c4ff8135fff609249ca378dc52003fad87f2ff8e2ec891463d5c406ce5cdc4919191000000`,
        [BuiltInPalette.Grayscale]: hex`000000ffffff545454a8a8a8808080dfdfdf727272bdbdbd353535c9c9c9565656939393373737bcbcbc7d7d7d000000`,
        [BuiltInPalette.Adventure]: hex`000000faf6f0d13b27e6879beba422f7e4762d914275cc4a25517568b5d4423b618c4a2e402819b583595757570f0f0f`,
        [BuiltInPalette.Matte]: hex`000000f5f5f5d9534ff08a5db83b5ef9ed69388e3c88d4982b58766eb5ff48466d7d5a503d3b40c5c5c57a7a7a1e1e1e`,
        [BuiltInPalette.Pastel]: hex`000000fffdf9ff8b94ffaaa5ffcb91fff59d88d8b0b8e99f779ecba8d5f4b69fd6c48c8a726a5a52e2ded59e9a952d2a2e`,
        [BuiltInPalette.Adafruit]: hex`000000ffffffe31c24ff6699ff8200ffd10000a85966cc33005eb866b2e83333999966cc663300d9d9d675787b000000`,
        [BuiltInPalette.SteamPunk]: hex`000000f4ebd9a63a2bd4846a9c5a25d9a84e3e5940788c5e2736404d6c7a3b2833694a3d2b1d12b8a9916e6352140e0a`,
        [BuiltInPalette.BlackAndWhite]: hex`000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000`,
        [BuiltInPalette.Poke]: hex`000000f8f8f8d83828f88878e87820f8d84830884078d86830589878b8f8584888986848483828b8b8a8707068181818`
    };
    //% group="Screen"
    //% weight=24
    //% blockId=custom_set_builtin_palette
    //% block="set color palette to %palette"
    export function setBuiltInPalette(palette: BuiltInPalette): void {
        const buf = palettes[palette];
        if (buf) {
            image.setPalette(buf);
        }
    }
}
