import React from "react";
import NavBarHome from "../components/NavBarHome";
import FrontImage from "../components/FrontImage";
import GeneralHeader from "../components/GeneralHeader"
const Homepage = ({ match }) => (
    <>
        <GeneralHeader />
        <h1>Write to me</h1>
        <div className="WriteToMe">
            <form>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div class="g-recaptcha" data-theme="dark" data-sitekey="6LcKXKYZAAAAAIaQsbS7lvHyH1VSIQpXWvinTktS"></div>
        </div>
    </>
);

export default Homepage;
