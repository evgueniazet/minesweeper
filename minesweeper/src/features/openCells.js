export const openCells = (arr, container, targetCell) => {

    const childrenArray = Array.from(container.children);
    if (arr.length > 0) {

        childrenArray.forEach((elem, index) => {


            const attributeNumber = elem.getAttribute('data-number');
            const attributeFlag = elem.hasAttribute('data-flag', 'true');



            arr.forEach((item) => {

                if (item === index && attributeNumber === '0' && !attributeFlag) {
                    elem.classList.add('cell-open');
                }

                if (item === index && attributeNumber === '1' && !attributeFlag) {
                    elem.classList.add('cell-open');
                    elem.classList.add('cell-open-one');
                    elem.innerHTML = '1';
                }

                if (item === index && attributeNumber === '2' && !attributeFlag) {
                    elem.classList.add('cell-open');
                    elem.classList.add('cell-open-two');
                    elem.innerHTML = '2';
                }

                if (item === index && attributeNumber === '3' && !attributeFlag) {
                    elem.classList.add('cell-open');
                    elem.classList.add('cell-open-three');
                    elem.innerHTML = '3';
                }


                // if (item === index && attributeValue === '0') {
                //     elem.classList.add('cell-open');
                // }

                // if (item === index && attributeValue === '1') {
                //     elem.classList.add('cell-open');
                //     elem.classList.add('cell-open-one');
                //     elem.innerHTML = '1';
                // }

                // if (item === index && attributeValue === '2') {
                //     elem.classList.add('cell-open');
                //     elem.classList.add('cell-open-two');
                //     elem.innerHTML = '2';
                // }

                // if (item === index && attributeValue === '3') {
                //     elem.classList.add('cell-open');
                //     elem.classList.add('cell-open-three');
                //     elem.innerHTML = '3';
                // }

            })
        })
    }
};