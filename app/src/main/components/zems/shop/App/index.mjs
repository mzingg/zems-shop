// noinspection JSUnusedGlobalSymbols

import { jsxLight, React } from '../../../../modules/zems/core/React/index.mjs'; /*$ZEMS_SSR_RESOURCE$*/
import { useComponent } from '../../../../modules/zems/core/ZemsReact/index.mjs'; /*$ZEMS_SSR_RESOURCE$*/

export default function App(props) {

    const Product1 = useComponent({
        resourceType: 'zems/shop/Product',
        props: {
            title: 'Prosciutto',
            description: 'Schinken Pizza',
            price: '15€'
        }
    })
    const Product2 = useComponent({
        resourceType: 'zems/shop/Product',
        props: {
            title: 'Diavola',
            description: 'Scharf mit Salami',
            price: '16€'
        }
    })
    const Product3 = useComponent({
        resourceType: 'zems/shop/Product',
        props: {
            title: 'Formaggio',
            description: 'Kaesetraum',
            price: '12€'
        }
    })

    //language=HTML
    return jsxLight`
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <h1>Example Shop by ZEMS</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">${Product1}</div>
                        <div className="col">${Product2}</div>
                        <div className="col">${Product3}</div>
                        <div className="col">${Product1}</div>
                        <div className="col">${Product2}</div>
                        <div className="col">${Product3}</div>
                        <div className="col">${Product1}</div>
                        <div className="col">${Product2}</div>
                        <div className="col">${Product3}</div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>`;
}