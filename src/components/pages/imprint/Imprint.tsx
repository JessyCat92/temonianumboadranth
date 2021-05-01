import React from 'react';
import './Imprint.scss';
import {RouteComponentProps} from "@reach/router";

function Imprint(props: RouteComponentProps) {
    return (
        <div className="Imprint">
            <h2>Imprint</h2>
            <div>

                <dl>
                    <dt>Name und Anschrift</dt>
                    <dd>Jessica Caitlyn Weber<br />
                        Neue Vogelsdorfer Straße 3<br/>
                        15562 Rüdersdorf bei Berlin
                    </dd>

                    <dt>E-Mail-Adresse</dt>
                    <dd><a href="mailto:jcj.weber.92+coding%40gmail.com">jcj.weber.92+coding@gmail.com</a></dd>

                </dl>
            </div>
        </div>
    );
}

export default Imprint;
