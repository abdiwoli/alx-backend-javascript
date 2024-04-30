export default function createInt8TypedArray(length, pos, value) {
  if (pos >= length || pos < 0) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const view = new DataView(buf);
  view.setInt8(pos, value);
  return view;
}
