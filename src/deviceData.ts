export const C28_DEVICE_VARIANT = "TMS320C28XX";
export const C29_DEVICE_VARIANT = "TMS320C29XX";

export const DEVICE_LIST : string [] = [
	"F29H85x",
	"F28P55x",
	"F28P65x",
	"F28002x",
	"F28004x",
	"F28003x",
	"F280013x",
	"F280015x",
	"F2838x",
	"F2837xD",
	"F2837xS",
	"F2807x",
];

export const BITFIELD_DEVICE_LIST : string [] = [
	"F29H85x",
	"F28P55x",
	"F28P65x",
	"F28002x",
	"F28004x",
	"F28003x",
	"F280013x",
	"F280015x",
	"F2838x",
	"F2837xD",
	"F2837xS",
	"F2807x",
	"F2803x"
];

export const BITFIELD_MIGRATION_PAIRS : Record<string, string[]> = {
	"F2803x" : ["F280013x"],
	//"F2837xD" : ["F28P65x"]
}

export const BITFIELD_MIGRATION_RESOLUTIONS : Record<string, string[]> = {
	"F2803x" : ["F280013x"]
}

export const NO_REGISTER_LINK_DEVICE_LIST = [
	"F2803x"
];

export const MIGRATION_RESOLUTION_DEVICE_LIST : string [] = [
	"F29H85x",
	"F28P55x",
	"F28P65x",
	"F28002x",
	"F28004x",
	"F28003x",
	"F280013x",
	"F280015x",
	"F2838x",
	"F2837xD",
	"F2837xS",
	"F2807x",
	"F2803x"
];

export const MIGRATION_RESOLUTION_FROM_DEVICE_LIST = [
	"F28P55x",
	"F28P65x",
	"F28002x",
	"F28004x",
	"F28003x",
	"F280013x",
	"F280015x",
	"F2838x",
	"F2837xD",
	"F2837xS",
	"F2807x",
	"F2803x"
];

export const MIGRATION_RESOLUTION_TO_DEVICE_LIST = [
	"F29H85x"
];


const F29H85X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f29h85/, 'i');
const F28P55X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f28p55\S/, 'i');
const F28P65X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f28p65\S/, 'i');
const F28004X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f28004\S[mc]{0,1}/, 'i');
const F28002X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f28002\S[c]{0,1}/, 'i');
const F28003X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f28003\S[c]{0,1}/, 'i');
const F280013X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f280013\S/, 'i');
const F280015X_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f280015\S/, 'i');
const F2837XD_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f2837\Sd/, 'i');
const F2838X_REGEX  = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f2838\Sd{0,1}/, 'i');
const F2837XS_REGEX = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f2837\Ss/, 'i');
const F2807X_REGEX  = new RegExp(/T{0,1}M{0,1}S{0,1}\d{0,3}f2807\S/, 'i');


const GPN_TO_DEVICE_REGEX_MAP = [
	{
		device: "F29H85x",
		regex: F29H85X_REGEX
	},
	{
		device: "F28P55x",
		regex: F28P55X_REGEX
	},
	{
		device: "F28P65x",
		regex: F28P65X_REGEX
	},
	{
		device: "F28004x",
		regex: F28004X_REGEX
	},
	{
		device: "F28002x",
		regex: F28002X_REGEX
	},
	{
		device: "F28003x",
		regex: F28003X_REGEX
	},
	{
		device: "F280013x",
		regex: F280013X_REGEX
	},
	{
		device: "F280015x",
		regex: F280015X_REGEX
	},
	{
		device: "F2838x",
		regex: F2838X_REGEX
	},
	{
		device: "F2837xD",
		regex: F2837XD_REGEX
	},
	{
		device: "F2837xS",
		regex: F2837XS_REGEX
	},
	{
		device: "F2807x",
		regex: F2807X_REGEX
	},
];



export function getDeviceGPNFromDeviceVariant(deviceVariant: string): string
{
	let deviceGPN = deviceVariant.replace(C28_DEVICE_VARIANT + ".", "");
	deviceGPN = deviceGPN.replace(C29_DEVICE_VARIANT + ".", "");
	return deviceGPN;
}

export function getDeviceFamilyFromGPN(gpn: string): string
{
	for (var devRegex of GPN_TO_DEVICE_REGEX_MAP)
	{
		if (devRegex.regex.test(gpn))
		{
			return devRegex.device;
		}
	}

	return "";
}
