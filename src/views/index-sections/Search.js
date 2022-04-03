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
                    <form>
                        <Row>
                            <FormGroup>
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
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" >
                                    <option value="">--Please choose a speciality--</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" >
                                    <option value="">--Please choose a location--</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn-round" color="info" type="button">
                                    <i className="now-ui-icons ui-1_zoom-bold"> Search</i>
                                </Button>
                            </FormGroup>

                        </Row>
                    </form>




                    {/*<div id="inputs">*/}
                    {/*    <Row>*/}
                    {/*        <Col lg="3" sm="6">*/}

                    {/*            <InputGroup className={rightFocus ? "input-group-focus" : ""} >*/}
                    {/*                <Input*/}
                    {/*                    placeholder="Name"*/}
                    {/*                    type="text"*/}
                    {/*                    onFocus={() => setRightFocus(true)}*/}
                    {/*                    onBlur={() => setRightFocus(false)}*/}
                    {/*                ></Input>*/}
                    {/*                <InputGroupAddon addonType={"append"}>*/}
                    {/*                    <InputGroupText>*/}
                    {/*                        <i className="now-ui-icons users_single-02"></i>*/}
                    {/*                    </InputGroupText>*/}
                    {/*                </InputGroupAddon>*/}
                    {/*            </InputGroup>*/}
                    {/*        </Col>*/}
                    {/*        /!*for speciality*!/*/}
                    {/*        <select name="pets" id="pet-select">*/}
                    {/*            <option value="">--Please choose an option--</option>*/}
                    {/*            <option value="dog">Dog</option>*/}
                    {/*            <option value="cat">Cat</option>*/}
                    {/*            <option value="hamster">Hamster</option>*/}
                    {/*            <option value="parrot">Parrot</option>*/}
                    {/*            <option value="spider">Spider</option>*/}
                    {/*            <option value="goldfish">Goldfish</option>*/}
                    {/*        </select>*/}
                    {/*        /!*for location*!/*/}
                    {/*        <select name="pets" id="pet-select">*/}
                    {/*            <option value="">--Please choose an option--</option>*/}
                    {/*            <option value="dog">Dog</option>*/}
                    {/*            <option value="cat">Cat</option>*/}
                    {/*            <option value="hamster">Hamster</option>*/}
                    {/*            <option value="parrot">Parrot</option>*/}
                    {/*            <option value="spider">Spider</option>*/}
                    {/*            <option value="goldfish">Goldfish</option>*/}
                    {/*        </select>*/}
                    {/*        <Button className="btn-round" color="info" type="button">*/}
                    {/*            <i className="now-ui-icons ui-1_zoom-bold"></i>*/}
                    {/*        </Button>*/}
                    {/*    </Row>*/}
                    {/*</div>*/}
                </Container>
            </div>
        </>
    );
}
export default Search;
