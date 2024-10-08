// noinspection JSUnusedGlobalSymbols

import { jsxLight, React } from '../../../../modules/zems/core/React/index.mjs'; /*$ZEMS_SSR_RESOURCE$*/

export default function App(props) {

    const {title, description, price} = props;

    //language=HTML
    return jsxLight`
        <div className="card h-100">
            <img className="card-img-top" src="https://bestellen.dominos.de/ManagedAssets/DE/product/PPRO/DE_PPRO_de_hero_7672.png"
                 alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">${title}</h5>
                <p className="card-text">${description}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Order</a> <b>${price}</b>
            </div>
        </div>`;
}