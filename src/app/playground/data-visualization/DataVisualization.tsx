"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  state: string;
  year: number;
  level: number;
}

export default function DataVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the CSV data
    d3.csv('/data/data.csv').then((csvData) => {
      const parsedData = csvData.map(d => ({
        state: d.STATE as string,
        year: +d.YEAR,
        level: +d.LEVEL
      }));
      setData(parsedData);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up the SVG dimensions and margins
    const margin = { top: 40, right: 120, bottom: 60, left: 60 };
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Get unique years and states
    const years = Array.from(new Set(data.map(d => d.year))).sort();
    const states = Array.from(new Set(data.map(d => d.state))).sort();

    // Create scales
    const xScale = d3.scaleBand()
      .domain(years.map(String))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.level) || 0])
      .range([height, 0]);

    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .style("fill", "white");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("fill", "white");

    // Style the axis lines
    svg.selectAll("path.domain")
      .style("stroke", "white");
    
    svg.selectAll("line")
      .style("stroke", "white");

    // Add Y axis label
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "14px")
      .text("Level");

    // Create a color scale for states
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Add lines for each state
    states.forEach(state => {
      const stateData = data.filter(d => d.state === state);
      
      const line = d3.line<DataPoint>()
        .x(d => xScale(String(d.year))! + xScale.bandwidth() / 2)
        .y(d => yScale(d.level));

      svg.append("path")
        .datum(stateData)
        .attr("fill", "none")
        .attr("stroke", colorScale(state))
        .attr("stroke-width", 2)
        .attr("d", line);

      // Add dots
      svg.selectAll(`.dot-${state}`)
        .data(stateData)
        .enter()
        .append("circle")
        .attr("class", `dot-${state}`)
        .attr("cx", d => xScale(String(d.year))! + xScale.bandwidth() / 2)
        .attr("cy", d => yScale(d.level))
        .attr("r", 4)
        .attr("fill", colorScale(state))
        .on("mouseover", function(event, d) {
          d3.select(this)
            .attr("r", 6)
            .attr("stroke", "#fff")
            .attr("stroke-width", 2);
        })
        .on("mouseout", function() {
          d3.select(this)
            .attr("r", 4)
            .attr("stroke", "none");
        });
    });

    // Add legend
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(states)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${width - 100},${i * 20})`);

    legend.append("rect")
      .attr("x", 0)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", colorScale);

    legend.append("text")
      .attr("x", 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .style("fill", "white")
      .text(d => d);

  }, [data]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-xl text-white">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <iframe
        src="https://data-visualization-ajq.vercel.app/"
        className="w-full h-full"
        style={{ border: 'none' }}
        title="Data Visualization Project"
      />
    </div>
  );
} 