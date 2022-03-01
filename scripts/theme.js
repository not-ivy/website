const themes = `
apollo.svg
battlestation.svg
berry.svg
bigtime.svg
boysenberry.svg
coal.svg
cobalt.svg
commodore.svg
forestlawn.svg
frameio.svg
gameboy.svg
garden.svg
gotham.svg
haxe.svg
isotope.svg
kawaii.svg
laundry.svg
lotus.svg
mahou.svg
marble.svg
murata.svg
muzieca.svg
nightowl.svg
ninetynine.svg
noir.svg
nord.svg
obsidian.svg
op-1.svg
orca.svg
pawbin.svg
pico8.svg
polivoks.svg
rainonwires.svg
roguelight.svg
sk.svg
snow.svg
solarised.dark.svg
solarised.light.svg
sonicpi.svg
soyuz.svg
tape.svg
teenage.svg
teletext.svg
vacuui.svg
zenburn.svg
`.split('\n');

// eslint-disable-next-line no-undef
const theme = new Theme();
theme.install();
theme.start();

export {
  themes,
  theme,
};
