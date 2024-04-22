import Title from './Title';

const Detail = (props) => {
	const { ATT_FILE_NO_MK, INFO_CAR, INFO_ENG, INFO_FAT, INFO_NA, INFO_PRO,  MANUAL01, MANUAL02, MANUAL03, MANUAL04, MANUAL05, MANUAL06, MANUAL07, MANUAL08, MANUAL09, MANUAL10, MANUAL11, MANUAL12, MANUAL13, MANUAL14, MANUAL15, MANUAL16, MANUAL17, MANUAL18, MANUAL19, MANUAL20, MANUAL_IMG01, MANUAL_IMG02, MANUAL_IMG03, MANUAL_IMG04, MANUAL_IMG05, MANUAL_IMG06, MANUAL_IMG07, MANUAL_IMG08, MANUAL_IMG09, MANUAL_IMG10, MANUAL_IMG11, MANUAL_IMG12, MANUAL_IMG13, MANUAL_IMG14, MANUAL_IMG15, MANUAL_IMG16, MANUAL_IMG17, MANUAL_IMG18, MANUAL_IMG19, MANUAL_IMG20, RCP_NA_TIP, RCP_NM, RCP_PARTS_DTLS } = props.data;

	const manuals = [
		{ desc: MANUAL01, img: MANUAL_IMG01 },
		{ desc: MANUAL02, img: MANUAL_IMG02 },
		{ desc: MANUAL03, img: MANUAL_IMG03 },
		{ desc: MANUAL04, img: MANUAL_IMG04 },
		{ desc: MANUAL05, img: MANUAL_IMG05 },
		{ desc: MANUAL06, img: MANUAL_IMG06 },
		{ desc: MANUAL07, img: MANUAL_IMG07 },
		{ desc: MANUAL08, img: MANUAL_IMG08 },
		{ desc: MANUAL09, img: MANUAL_IMG09 },
		{ desc: MANUAL10, img: MANUAL_IMG10 },
		{ desc: MANUAL11, img: MANUAL_IMG11 },
		{ desc: MANUAL12, img: MANUAL_IMG12 },
		{ desc: MANUAL13, img: MANUAL_IMG13 },
		{ desc: MANUAL14, img: MANUAL_IMG14 },
		{ desc: MANUAL15, img: MANUAL_IMG15 },
		{ desc: MANUAL16, img: MANUAL_IMG16 },
		{ desc: MANUAL17, img: MANUAL_IMG17 },
		{ desc: MANUAL18, img: MANUAL_IMG18 },
		{ desc: MANUAL19, img: MANUAL_IMG19 },
		{ desc: MANUAL20, img: MANUAL_IMG20 },
	];

	const source = RCP_PARTS_DTLS.split('●')
		.map((el) =>
			el
				.split(':')
				.map((el) => el.trim())
				.filter(Boolean)
		)
		.filter((el) => el.length);

	return (
		<>
			<div className='detail'>
				<img className='detail_mainimg' src={ATT_FILE_NO_MK} alt={RCP_NM} />
				<Title h1={RCP_NM} />
				<div className='detail_info'>
					<Title h3='재료' />
					{source.map((el, idx) => {
						return (
							<div className='txt' key={idx}>
								<span className='title'>{el[0]}</span>
								<span className='content'>{el[1]}</span>
							</div>
						);
					})}
				</div>

				<div className='detail_info'>
					<Title h3='조리 방법' />
					{manuals.map((manual, index) =>
						manual.desc ? (
							<div className='desc_list' key={index}>
								<span className='txt'>{manual.desc.slice(0, -1)}</span>
								<img src={manual.img} alt={RCP_NM} />
							</div>
						) : null
					)}
				</div>
				<div className='detail_info'>
					<Title h3='영양정보' />
					<div className='table'>
						<div className='row'>
							<span className='col'>열 량:</span> <span className='col'>{INFO_ENG} kal</span>
						</div>
						<div className='row'>
							<span className='col'>탄 수 화 물:</span> <span className='col'>{INFO_CAR} g</span>
						</div>
						<div className='row'>
							<span className='col'>단 백 질:</span> <span className='col'>{INFO_PRO} g</span>
						</div>

						<div className='row'>
							<span className='col'>지 방:</span> <span className='col'>{INFO_FAT} g</span>
						</div>

						<div className='row'>
							<span className='col'>나 트 륨:</span> <span className='col'>{INFO_NA} g</span>
						</div>

						<div className='tip'>
							<span className='col'>저감 조리법 TIP:</span> <span className='col'>{RCP_NA_TIP}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
