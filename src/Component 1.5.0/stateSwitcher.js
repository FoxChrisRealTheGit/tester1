export default function (num) {
    switch (num) {
        case 2:
            return {
                block1Direction: 'props.block1direction || "row"',
                block1: 'props.block1 || "1"',
                block1BorderLeft: 'props.b1BLeft',
                block1BorderRight: 'props.b1BRight',
                block1BorderTop: 'props.b1BTop',
                block1BorderBottom: 'props.b1BBottom',
                block1Border: 'props.b1Border',
                fontSize1: 'props.fontSize1 || "50px"',
                alignBlock1: 'props.alignBlock1' || 'center',
                justifyBlock1: 'props.justifyBlock1' || 'center',
                block1smdis: 'props.block1smdis' || 'flex',
                block1mddis: 'props.block1mddis' || 'flex',
                block2: 'props.block2' || '1',
                block2BorderLeft: 'props.b2BLeft',
                block2BorderRight: 'props.b2BRight',
                block2BorderTop: 'props.b2BTop',
                block2BorderBottom: 'props.b2BBottom',
                block2Border: 'props.b2Border',
                alignBlock2: 'props.alignBlock2' || 'center',
                justifyBlock2: 'props.justifyBlock2' || 'center',
                block2smdis: 'props.block2smdis' || 'flex',
                block2mddis: 'props.block2mddis' || 'flex',
                background: 'props.background',
            }

        default:
            return {
                block1Direction: 'props.block1direction' || 'row',
                block1: 'props.block1' || '1',
                block1BorderLeft: 'props.b1BLeft',
                block1BorderRight: 'props.b1BRight',
                block1BorderTop: 'props.b1BTop',
                block1BorderBottom: 'props.b1BBottom',
                block1Border: 'props.b1Border',
                alignBlock1: 'props.alignBlock1' || 'center',
                justifyBlock1: 'props.justifyBlock1' || 'center',
                block1smdis: 'props.block1smdis' || 'flex',
                block1mddis: 'props.block1mddis' || 'flex',
            }
    }
}