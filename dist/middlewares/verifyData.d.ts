declare function verifyIdToken(req: any, res: any, next: any): Promise<void>;
declare const middleware: {
    verifyIdToken: typeof verifyIdToken;
};
export default middleware;
//# sourceMappingURL=verifyData.d.ts.map