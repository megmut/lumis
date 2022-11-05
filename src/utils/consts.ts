import { SyntaxKind } from "ts-morph";
import { tsTypes } from "../shared/enums";

export const map: {[key: number]: tsTypes} = {
    [SyntaxKind.StringKeyword]: tsTypes.string,
    [SyntaxKind.NumberKeyword]: tsTypes.number,
    [SyntaxKind.BooleanKeyword]: tsTypes.boolean,
    [SyntaxKind.TupleType]: tsTypes.tuple,
    [SyntaxKind.EnumKeyword]: tsTypes.enum,
    [SyntaxKind.UnknownKeyword]: tsTypes.unknown,
    [SyntaxKind.AnyKeyword]: tsTypes.any,
    [SyntaxKind.VoidKeyword]: tsTypes.void,
    [SyntaxKind.NullKeyword]: tsTypes.null,
    [SyntaxKind.UndefinedKeyword]: tsTypes.undefined,
    [SyntaxKind.NeverKeyword]: tsTypes.never,
    [SyntaxKind.ObjectKeyword]: tsTypes.object,
    [SyntaxKind.UnionType]: tsTypes.union,
    [SyntaxKind.BigIntKeyword]: tsTypes.bigint,
    [SyntaxKind.SymbolKeyword]: tsTypes.symbol,
    [SyntaxKind.TypeLiteral]: tsTypes.object,
    [SyntaxKind.ArrayType]: tsTypes.array,
    [SyntaxKind.TypeReference]: tsTypes.typeReference
};