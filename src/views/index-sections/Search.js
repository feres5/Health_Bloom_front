import React from "react";

import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

function Search(){
    const [rightFocus, setRightFocus] = React.useState(false);
    const [collapseOpen, setCollapseOpen] = React.useState(false);

    return(
        <>
            <div className="section section-basic" >
                <Container>
                    <h3 className="title">search here</h3>
                    <div id="inputs">
                        <Row>
                            <Col lg="3" sm="6">
                                <InputGroup className={rightFocus ? "input-group-focus" : ""} >
                                    <Input
                                        placeholder="Name"
                                        type="text"
                                        onFocus={() => setRightFocus(true)}
                                        onBlur={() => setRightFocus(false)}
                                    ></Input>
                                    <InputGroupAddon addonType={"append"}>
                                        <InputGroupText>
                                            <i className="now-ui-icons users_single-02"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <select>
                                    <option value="test" > hello</option>
                                    <option value="test1" > world</option>
                                </select>


                                <Button className="btn-round" color="info" type="button">
                                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Search;
