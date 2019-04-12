import React from "react";
import { Row, Col } from "reactstrap";
import "./routes.css";


class RouteDetail extends React.Component {
    state = {
        trail: this.props.trail,
        towns: this.props.towns
    }

    render() {
        return (
            <>
                    <Col md="12" lg="7" className="mt-3">

                            <iframe class="trailmap" frameborder="0" src={this.state.trail.mapEmbed}></iframe>

                    </Col>
                    <Col md="12" lg="5" className="mt-3">
                        <h5>{this.state.trail.name}</h5>
                        <p>
                            {this.state.towns}<br />
                            {!this.state.trail.description ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem vitae, sunt provident illum dolorum impedit libero quos deserunt repellat reiciendis delectus, consequatur alias asperiores minus architecto earum. Ipsum, libero." : this.state.trail.description}
                        </p>
                    </Col>

            </>
        );
    }
}

export default RouteDetail;