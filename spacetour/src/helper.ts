export function getUnderlineNewPosition(
    navX: number,
    activeLinkWidth: number,
    activeLinkX: number,
    underlineWidth: number = 50,
): string {

    let newPosition = activeLinkX - navX;

    return newPosition + 'px';
}