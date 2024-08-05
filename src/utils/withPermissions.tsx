//你所拥有的权限 当前按钮所需要的权限
/**
 *
 * @param requiredPermissions 所需权限
 * @param userPermissions 用户权限['edit','delete']
 * @returns (Component:React.ReactElement) => (props:any):React.ReactElement|null
 */
function withPermissions(requiredPermissions: string[], userPermissions: string[]): (Componet: React.FC) => React.FC {
    return function (Component: React.FC) {
        return function (props: any): React.ReactElement | null {
            const hasPermission: boolean = requiredPermissions.every((item) => userPermissions.includes(item));
            if (!hasPermission) {
                return null;
            }
            return <Component {...props} />;
        };
    };
}

export default withPermissions;
