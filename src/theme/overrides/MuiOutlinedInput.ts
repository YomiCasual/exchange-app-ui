const MuiOutlinedInput = {
	notchedOutline: {
		top: '-4px !important',
		borderColor: '#E4E9F2',
		borderWidth: 1,
	},
	root: {
		borderRadius: 5,

		'& .MuiSelect-select': {
			minHeight: '0 !important',
			lineHeight: 1.25,
		},

		'&.Mui-focused': {
			'& $notchedOutline': {
				borderColor: '#3366FF',
				borderWidth: 1.5,
				boxShadow: '1px 1px 9px #EDF1F7',
			},
		},
	},
	input: {
		padding: 15,
		'&.MuiInputBase-inputAdornedStart': {
			paddingLeft: 0,
		},
		'&$inputAdornedStart': {
			paddingLeft: '5px !important',
		},
	},
};

export default MuiOutlinedInput;
