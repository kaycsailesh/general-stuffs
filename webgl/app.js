import * as planck from 'planck/dist/planck-with-testbed';
import {testbed} from "planck/testbed/index";

planck.testbed((testbed) => {
    let pl = planck;
    let Vec2 = pl.Vec2;

    let gravity = Vec2(0, -10);
    let world = pl.World(gravity);
    let groundFD = {
        density: 0,
        friction: 0.6
    }
    let groundBody = world.createBody({
        position: Vec2(0, -10)
    })
    let groundBox = pl.Box(100, 0.1);


    // groundBody.createFixture(groundBox, 0)
    groundBody.createFixture(pl.Edge(Vec2(-20.0, 0.0), Vec2(-30, 20.0)), groundFD);
    groundBody.createFixture(pl.Edge(Vec2(-30.0, 20.0), Vec2(-35, 40.0)), groundFD);
    groundBody.createFixture(pl.Edge(Vec2(-20.0, 0.0), Vec2(20.0, 0.0)), groundFD);

    var hs = [ 0.25, 1.0, 4.0, 0.0, 0.0, -1.0, -2.0, -2.0, -1.25, 0.0 ];

    var x = 20.0, y1 = 0.0, dx = 5.0;

    for (var i = 0; i < 10; ++i) {
        var y2 = hs[i];
        groundBody.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, y2)), groundFD);
        y1 = y2;
        x += dx;
    }

    for (var i = 0; i < 10; ++i) {
        var y2 = hs[i];
        groundBody.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, y2)), groundFD);
        y1 = y2;
        x += dx;
    }

    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x + 40.0, 0.0)), groundFD);

    x += 80.0;
    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x + 40.0, 0.0)), groundFD);

    x += 40.0;
    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x + 10.0, 5.0)), groundFD);

    x += 20.0;
    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x + 40.0, 0.0)), groundFD);

    x += 40.0;
    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x, 20.0)), groundFD);

    x += 80.0;
    groundBody.createFixture(pl.Edge(Vec2(x, 0.0), Vec2(x+10, 40.0)), groundFD);

    let bodyDef = {
        type: 'dynamic',
        position: Vec2(0, 4),
        linearDamping: 0.5,
        enableMotor: true,
        speed: 10
    }

    let body = world.createBody(bodyDef)

    let dynamicCircle = pl.Circle(1, 10)
    let dynamicBox = pl.Box(1, 1);
    let fixtureDef = {
        shape: dynamicCircle,
        density: 3,
        friction: 10
    }

    body.createFixture(fixtureDef)

    testbed.step = () => {
        if (testbed.activeKeys.right) {
            body.applyAngularImpulse(-1, true)
        } else if (testbed.activeKeys.left) {
            body.applyAngularImpulse(1, true)
        }

        let cp = body.getPosition()
        // console.log(cp, testbed)
        if (cp.x > testbed.x + 10) {
            testbed.x = cp.x - 10;

        } else if (cp.x < testbed.x - 10) {
            testbed.x = cp.x + 10;
        }
    }

    return world
})