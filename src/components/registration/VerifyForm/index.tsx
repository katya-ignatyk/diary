import * as React from 'react';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import newspaperImage from '../../../assets/img/newspaper.jpg';
import Button from '../../../containers/ButtonContainer';
import Form from '../../shared/Form';
import Text from '../../shared/Form/Text';
import { IVerifyReduxProps } from './interfaces';

function VerifyForm(props : IVerifyReduxProps) {
  const history = useHistory();
  const location = useLocation();  
  const { verifyUser } = props;

  const parsed = queryString.parse(location.search);
  const token = parsed.token;

  const handleClick = React.useCallback(() => {
    if (!token || typeof token !== "string"){
      return null;
    }
    
    verifyUser(token).then((resolved : boolean) => { 
      if (resolved) {
        typeof(resolved) === 'string'? 
        history.push('/forgotPassword') : 
        history.push('/home'); 
      }
    });
  }, []);

  return (
    <Form imgSrc={newspaperImage} title='Confirm'>
      <Text 
        text='You have successfully created a Diary account.
        Please click on the button below to verify your accountand complete registration'
      />
      <Button text='Click here' onClick={handleClick}/>
    </Form>
  );
}

export default VerifyForm;