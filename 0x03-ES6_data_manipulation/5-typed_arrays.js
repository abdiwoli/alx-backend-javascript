export default function createInt8TypedArray(length, pos, value) {
  const buf = new ArrayBuffer(length);
  const view = new DataView(buf);
  view.setInt8(pos, value);
  return view;
}
