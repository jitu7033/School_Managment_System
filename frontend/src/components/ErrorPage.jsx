import React from "react";
import styled from 'styled-components';

const ErrorPage = () =>{
    return (
        <Container>
            <Content>
                <Heading>Oops , Something went Wrong</Heading>
                <Text>
                    We apologize for the inconvenience. Our website is currently experiencing technical difficulties. Please check back later.
                </Text>
            </Content>
        </Container>
    );
};

export default ErrorPage;