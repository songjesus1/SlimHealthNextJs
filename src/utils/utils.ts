export const userInfoKey = "userInfo";

export const getEnumReference = <T extends Record<string, unknown>>(
  enumObject: T,
  value: T[keyof T],
  enumName: string,
) => {
  const entry = Object.entries(enumObject).find(([enumKey, enumValue]) => {
    return (
      enumValue === value || (typeof value === "string" && enumKey === value)
    );
  });

  return entry ? `${enumName}.${entry[0]}` : JSON.stringify(value);
};
