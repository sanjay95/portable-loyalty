import React from 'react';
import {
  PageContainer,
  LeftContainer,
  ImageMosaic,
  ImageTile,
  RightContainer,
  Title,
  Subtitle,
  Link,
  Form,
  Input,
  Select,
  InfoIcon,
  Label,
  HelperText,
  ArrowBack
} from './index.styled';

const RegistrationPage = () => {
  return (
    <>
    <ArrowBack />
      <PageContainer>
        <LeftContainer>
          
          <Title>Create an <span style={{ color: '#0058a3' }}>IKEA Family</span> Profile</Title>
          <Subtitle>Already have an account? <Link href="/login">Login</Link></Subtitle>
          <>
            <ImageMosaic>
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_9.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_1.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_2.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_3.jpg")' }} />
            </ImageMosaic>
          </>
          <>
            <ImageMosaic>
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_4.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_5.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_7.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_8.jpg")' }} />
              <ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_6.jpg")' }} />
            </ImageMosaic>
          </>
        </LeftContainer>

        <RightContainer>
          <Subtitle>Become a member of Smart Family today. Did we mention it's free to join? <Link href="/details">Get the details.</Link></Subtitle>
          <Form>
            <Label htmlFor="firstName">First name</Label>
            <Input type="text" id="firstName" name="firstName" required />

            <Label htmlFor="surname">Surname</Label>
            <Input type="text" id="surname" name="surname" required />

            <Label htmlFor="birthdate">Birthdate</Label>
            <Input type="text" id="birthdate" name="birthdate" placeholder="DD-MM-YYYY" required />
            <InfoIcon title="We require this field in order to best personalize communication & marketing material and understand our users better.">ℹ️</InfoIcon>

            <Label htmlFor="gender">Gender</Label>
            <Select id="gender" name="gender" required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
            <HelperText>We require this field in order to best personalize communication & marketing material and understand our users better.</HelperText>

            <Label htmlFor="postcode">Post code</Label>
            <Input type="text" id="postcode" name="postcode" required />

            <Label htmlFor="store">Preferred store</Label>
            <Select id="store" name="store" required>
              <option value="">Select your preferred store</option>
              <option value="store1">Store 1</option>
              <option value="store2">Store 2</option>
              <option value="store3">Store 3</option>
            </Select>

            <Label htmlFor="mobile">Mobile</Label>
            <Input type="text" id="mobile" name="mobile" required />
          </Form>
        </RightContainer>
      </PageContainer>
    </>
  );
};

export default RegistrationPage;
