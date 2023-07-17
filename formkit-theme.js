export default {
	global: {
		fieldset: "max-w-md border border-gray-400 rounded px-2 pb-1",
		help: "text-xs text-gray-500",
		inner: "formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none",
		input: "appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none",
		label: "block mb-2.5 font-medium text-base",
		legend: "font-bold text-sm",
		loaderIcon: "inline-flex items-center w-4 text-gray-600 animate-spin",
		message: "text-red-500 mb-1 text-xs",
		messages: "list-none p-0 mt-1 mb-0",
		outer: "formkit-disabled:opacity-50",
		prefixIcon: "w-5 flex grow-0 shrink-0 [&>svg]:w-full ml-5 -mr-2.5",
		suffixIcon: "w-5 flex grow-0 shrink-0 [&>svg]:w-full mr-5 -ml-2.5",
	},
	"family:button": {
		input: "$reset flex justify-center text-base text-[#4B4B4B] bg-white p-5 rounded-[20px] w-full text-center formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",
		prefixIcon: "$reset block w-4 -ml-2 mr-2 stretch",
		suffixIcon: "$reset block w-4 ml-2 stretch",
	},
	"family:text": {
		inner: "bg-white text-[#4B4B4B] text-xl rounded-[20px] flex items-center overflow-hidden",
		input: "text-base w-full placeholder-[#4B4B4B]/50 p-5",
	},
	select: {
		inner: "relative bg-white text-[#4B4B4B] text-xl rounded-[20px] flex items-center overflow-hidden",
		input: "text-base w-full placeholder-[#4B4B4B]/50 p-5",
		selectIcon:
			"flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]",
		option: "formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700",
	},
};
