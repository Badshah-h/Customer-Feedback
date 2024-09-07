const formStepJs = () => {
    const DOMstrings = {
        stepsBtnClass: 'multisteps-form__progress-btn',
        stepsBtns: document.querySelectorAll('.multisteps-form__progress-btn'),
        stepsBar: document.querySelector('.multisteps-form__progress'),
        stepsForm: document.querySelector('.multisteps-form__form'),
        stepFormPanelClass: 'multisteps-form__panel',
        stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
        stepPrevBtnClass: 'js-btn-prev',
        stepNextBtnClass: 'js-btn-next'
    };

    const removeClasses = (elemSet, className) => {
        elemSet.forEach(elem => elem.classList.remove(className));
    };

    const findParent = (elem, parentClass) => {
        let currentNode = elem;
        while (currentNode && !currentNode.classList.contains(parentClass)) {
            currentNode = currentNode.parentNode;
        }
        return currentNode;
    };

    const getActiveStep = (elem) => {
        return Array.from(DOMstrings.stepsBtns).indexOf(elem);
    };

    const setActiveStep = (activeStepNum) => {
        removeClasses(DOMstrings.stepsBtns, 'js-active');
        removeClasses(DOMstrings.stepsBtns, 'current');
        DOMstrings.stepsBtns.forEach((elem, index) => {
            if (index <= activeStepNum) {
                elem.classList.add('js-active');
            }
            if (index === activeStepNum) {
                elem.classList.add('current');
            }
        });
    };

    const setActivePanel = (activePanelNum) => {
        removeClasses(DOMstrings.stepFormPanels, 'js-active');
        DOMstrings.stepFormPanels.forEach((elem, index) => {
            if (index === activePanelNum) {
                elem.classList.add('js-active');
            }
        });
    };

    const onStepBtnClick = (e) => {
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(DOMstrings.stepsBtnClass)) {
            return;
        }
        const activeStep = getActiveStep(eventTarget);
        setActiveStep(activeStep);
        setActivePanel(activeStep);
    };

    const onFormBtnClick = (e) => {
        const eventTarget = e.target;
        if (!(eventTarget.classList.contains(DOMstrings.stepPrevBtnClass) || eventTarget.classList.contains(DOMstrings.stepNextBtnClass))) {
            return;
        }
        const activePanel = findParent(eventTarget, DOMstrings.stepFormPanelClass);
        let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

        if (eventTarget.classList.contains(DOMstrings.stepPrevBtnClass)) {
            if (activePanelNum > 0) {
                activePanelNum--;
                setActiveStep(activePanelNum);
                setActivePanel(activePanelNum);
            }
        } else if (eventTarget.classList.contains(DOMstrings.stepNextBtnClass)) {
            const form = document.querySelector('#wizard');
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            if (activePanelNum < DOMstrings.stepFormPanels.length - 1) {
                activePanelNum++;
                setActiveStep(activePanelNum);
                setActivePanel(activePanelNum);
            }
        }
    };

    DOMstrings.stepsBar.addEventListener('click', onStepBtnClick);
    DOMstrings.stepsForm.addEventListener('click', onFormBtnClick);
};

export default formStepJs;
