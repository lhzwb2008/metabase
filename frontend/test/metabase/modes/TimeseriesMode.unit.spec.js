import "metabase-lib/lib/Question";

import React from "react";
import { TimeseriesModeFooter } from "metabase/modes/components/modes/TimeseriesMode";
import TimeseriesGroupingWidget from "metabase/modes/components/TimeseriesGroupingWidget";
import TimeseriesFilterWidget from "metabase/modes/components/TimeseriesFilterWidget";
import { shallow } from "enzyme";

describe("TimeSeriesModeFooter", () => {
  it("should always render TimeseriesFilterWidget", () => {
    const wrapper = shallow(<TimeseriesModeFooter />);
    expect(wrapper.find(TimeseriesFilterWidget).length).toEqual(1);
  });
  it("should always render TimeseriesGroupingWidget", () => {
    const wrapper = shallow(<TimeseriesModeFooter />);
    expect(wrapper.find(TimeseriesGroupingWidget).length).toEqual(1);
  });
});
