// Custom coded testing methods

const expect = (condition) => {
    displayInfo = (pass, innervalue, innercondition) => {
        if (pass) {
            console.log('Passed', "expected ",innervalue,"to be",innercondition);
        } else {
            console.error('Failed', "expected ",innervalue,"to be",innercondition);
        }
        return pass;
    }
    return {
        toBe: (value) => {
            return displayInfo(JSON.stringify(value) === JSON.stringify(condition), value, condition);
        }
    }
};