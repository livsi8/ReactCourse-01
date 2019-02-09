import AmountInput from 'AmountInput';
import someText from 'someText';
import submitButton from 'subminBTN';

import { validationLogic } from 'validationLogic';
import { submitLogic } from 'submitLogic'

function universalPayment(config) {

    return (
        <Form>
            config.someText && <someText/>
            config.amount && <AmountInput paymentName={ config.paymentName } valiadtion={validationLogic}/>
            <submitButton logic={submitLogic}/>
        </Form>
    );
}
