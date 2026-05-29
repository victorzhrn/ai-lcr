// Monochrome brand marks for the model makers, sourced from @lobehub/icons.
// We deep-import the `.../components/Mono` leaf (not the `{ Vendor }` barrel) on
// purpose: the barrel attaches `.Avatar`/`.Combine` statics that pull in
// @lobehub/ui + antd and bloat the bundle. The Mono leaf is a plain
// `fill:currentColor` SVG with only a react dependency.

import type { ComponentType } from "react";
import OpenAIMono from "@lobehub/icons/es/OpenAI/components/Mono";
import AnthropicMono from "@lobehub/icons/es/Anthropic/components/Mono";
import GoogleMono from "@lobehub/icons/es/Google/components/Mono";
import XAIMono from "@lobehub/icons/es/XAI/components/Mono";
import DeepSeekMono from "@lobehub/icons/es/DeepSeek/components/Mono";
import FluxMono from "@lobehub/icons/es/Flux/components/Mono";
import StabilityMono from "@lobehub/icons/es/Stability/components/Mono";
import ByteDanceMono from "@lobehub/icons/es/ByteDance/components/Mono";
import RunwayMono from "@lobehub/icons/es/Runway/components/Mono";
import KlingMono from "@lobehub/icons/es/Kling/components/Mono";
import QwenMono from "@lobehub/icons/es/Qwen/components/Mono";
import MinimaxMono from "@lobehub/icons/es/Minimax/components/Mono";
import BriaMono from "@lobehub/icons/es/BriaAI/components/Mono";
import RecraftMono from "@lobehub/icons/es/Recraft/components/Mono";
import IdeogramMono from "@lobehub/icons/es/Ideogram/components/Mono";
import PixVerseMono from "@lobehub/icons/es/PixVerse/components/Mono";
import LumaMono from "@lobehub/icons/es/Luma/components/Mono";
import LightricksMono from "@lobehub/icons/es/Lightricks/components/Mono";
import CivitaiMono from "@lobehub/icons/es/Civitai/components/Mono";
import HunyuanMono from "@lobehub/icons/es/Hunyuan/components/Mono";
import FalMono from "@lobehub/icons/es/Fal/components/Mono";

type IconComponent = ComponentType<{ size?: number | string }>;

// ai-lcr vendor id → @lobehub/icons mono glyph. Vendors absent here (e.g.
// hidream — no lobehub icon) render nothing.
const VENDOR_ICON: Record<string, IconComponent> = {
  openai: OpenAIMono,
  anthropic: AnthropicMono,
  google: GoogleMono,
  xai: XAIMono,
  deepseek: DeepSeekMono,
  bfl: FluxMono,
  stability: StabilityMono,
  bytedance: ByteDanceMono,
  runway: RunwayMono,
  kuaishou: KlingMono,
  alibaba: QwenMono,
  minimax: MinimaxMono,
  bria: BriaMono,
  recraft: RecraftMono,
  ideogram: IdeogramMono,
  pixverse: PixVerseMono,
  luma: LumaMono,
  lightricks: LightricksMono,
  civitai: CivitaiMono,
  tencent: HunyuanMono,
  fal: FalMono,
};

export function hasVendorIcon(id: string): boolean {
  return id in VENDOR_ICON;
}

export default function VendorIcon({
  id,
  size = 14,
  style,
}: {
  id: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  const Icon = VENDOR_ICON[id];
  if (!Icon) return null;
  return (
    <span style={{ display: "inline-flex", flex: "none", lineHeight: 0, ...style }}>
      <Icon size={size} />
    </span>
  );
}
