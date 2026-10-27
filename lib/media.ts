/** Shared media referenced by more than one page. */

export const ATELIER_VIDEO = "/uploads/10439515-hd_1920_1080_25fps.mp4";

/** Filename carries spaces — pre-encoded so it is safe in any src attribute. */
export const ATELIER_POSTER =
  "/uploads/Customized%20Uniforms%20Manufacturers%20in%20Bangalore%20_%20Komal%20Uniforms.jpg";

export const ATELIER_POSTER_SIZE = { width: 561, height: 417 };

/** Editorial photography hot-linked from Pexels, as in the design canvas. */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const PEXELS = {
  industrie: pexels(4489758),
  cuisine: pexels(4253133),
  service: pexels(8629106),
  surjeteuse: pexels(4492077),
  machine: pexels(5894261),
  broderie: pexels(30378380),
  /** Machine floor gallery — home and atelier. */
  piquage: pexels(31321016),
  parcMachines: pexels(17710109),
  brodeuses: pexels(32641546),
};
