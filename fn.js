const fn1 = (n1, n2) => {
	return print(n1 + n2);
};
const print = (a) => {
	console.log(a);
};
fn1('딸기', '망고');


/* -==== */
const fn2 = (n1, n2, print) => {
    const result = n1 + n2;
    print(result); // 여기서 콜백 함수를 호출합니다.
};

const print1 = (a) => {
    console.log(a);
};

fn2('딸기', '바나나', print); // '딸기망고' 출력