import ear from "rabbit-ear";
import vertexShader from "./shaders-webgl1/touches-100.vert?raw";
import fragmentShader from "./shaders-webgl1/touches-100.frag?raw";

const makeVertexArrays = (gl, program) => [{
	location: gl.getAttribLocation(program, "v_position"),
	buffer: gl.createBuffer(),
	type: gl.FLOAT,
	length: 2,
	data: new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
}];

const makeElementArrays = (gl) => [{
	mode: gl.TRIANGLE_STRIP,
	buffer: gl.createBuffer(),
	data: new Uint32Array([0, 1, 2, 3]),
}];

const indicatorsV1 = (gl) => {
	const program = ear.webgl.createProgram(gl, vertexShader, fragmentShader);
	return {
		program,
		vertexArrays: makeVertexArrays(gl, program),
		elementArrays: makeElementArrays(gl),
		flags: [],
	};
};

const WebGLTouchIndicators = (gl, version = 1) => {
	switch (version) {
		case 1: return [indicatorsV1(gl)]; break;
		case 2: return [indicatorsV1(gl)]; break;
	}
};

export default WebGLTouchIndicators;
