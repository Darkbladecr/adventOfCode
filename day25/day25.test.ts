import { SeaFloor } from './day25';

describe('Sea Floor', () => {
  it('Check EAST char block', () => {
    const knownFloor = '...>>>>>...';
    const seaFloor = new SeaFloor(knownFloor);
    const eastCharAvail = seaFloor._isNextEastCharAvail(
      6,
      0,
      seaFloor.floorRows
    );
    expect(eastCharAvail).toEqual(false);
  });
  it('Check EAST char open', () => {
    const knownFloor = '...>>>>>...';
    const seaFloor = new SeaFloor(knownFloor);
    const eastCharAvail = seaFloor._isNextEastCharAvail(
      7,
      0,
      seaFloor.floorRows
    );
    expect(eastCharAvail).toEqual(true);
  });
  it('Check EAST char series', () => {
    const knownFloor = ['...>>>>>...', '...>>>>.>..', '...>>>.>.>.'];
    const seaFloor = new SeaFloor(knownFloor[0]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[1]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[2]);
  });
  it('Simple 4 steps', () => {
    const knownFloor = [
      `...>...
.......
......>
v.....>
......>
.......
..vvv..`,
      `..vv>..
.......
>......
v.....>
>......
.......
....v..`,
      `....v>.
..vv...
.>.....
......>
v>.....
.......
.......`,
      `......>
..v.v..
..>v...
>......
..>....
v......
.......`,
      `>......
..v....
..>.v..
.>.v...
...>...
.......
v......`,
    ];
    const seaFloor = new SeaFloor(knownFloor[0]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[1]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[2]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[3]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[4]);
  });

  it('Advanced 4 steps', () => {
    const knownFloor = [
      `v...>>.vv>
.vv>>.vv..
>>.>v>...v
>>v>>.>.v.
v>v.vv.v..
>.>>..v...
.vv..>.>v.
v.v..>>v.v
....v..v.>`,
      `....>.>v.>
v.v>.>v.v.
>v>>..>v..
>>v>v>.>.v
.>v.v...v.
v>>.>vvv..
..v...>>..
vv...>>vv.
>.v.v..v.v`,
      `>.v.v>>..v
v.v.>>vv..
>v>.>.>.v.
>>v>v.>v>.
.>..v....v
.>v>>.v.v.
v....v>v>.
.vv..>>v..
v>.....vv.`,
      `v>v.v>.>v.
v...>>.v.v
>vv>.>v>..
>>v>v.>.v>
..>....v..
.>.>v>v..v
..v..v>vv>
v.v..>>v..
.v>....v..`,
      `v>..v.>>..
v.v.>.>.v.
>vv.>>.v>v
>>.>..v>.>
..v>v...v.
..>>.>vv..
>.v.vv>v.v
.....>>vv.
vvv>...v..`,
      `vv>...>v>.
v.v.v>.>v.
>.v.>.>.>v
>v>.>..v>>
..v>v.v...
..>.>>vvv.
.>...v>v..
..v.v>>v.v
v.v.>...v.`,
    ];
    const seaFloor = new SeaFloor(knownFloor[0]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[1]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[2]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[3]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[4]);
    seaFloor.next();
    expect(seaFloor.toString()).toEqual(knownFloor[5]);
  });

  it('calculate number of steps', () => {
    const knownFloor = `v...>>.vv>
.vv>>.vv..
>>.>v>...v
>>v>>.>.v.
v>v.vv.v..
>.>>..v...
.vv..>.>v.
v.v..>>v.v
....v..v.>`;
    const seaFloor = new SeaFloor(knownFloor);
    const finalStep = seaFloor.end();
    expect(finalStep).toEqual(58);
    expect(seaFloor.steps.length).toEqual(58);
  });
});
